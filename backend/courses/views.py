from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import get_Courses_Serializer, Comment_Serializer
from .models import Course, Comment
from users.models import User
import json

# Create your views here.
# class Create_Course(APIView):
#     def post(self, request):
#         serializer = get_Courses_Serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         status_code = status.HTTP_201_CREATED
#         response = {
#             'success' : 'True',
#             'status code' : status_code,
#             'message': 'User registered  successfully',
#             }
#         return Response(response, status=status_code)


class Create_Course(APIView):
    def post(self, request, *args, **kwargs):
        # # validation
        serializer = get_Courses_Serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = self.request.data

        author = data['author']
        price = data['price']

        if price.find(".") == -1:
            price = price + ".0"

        author = get_object_or_404(User, id=author)

        course = Course(
            title=data['title'],
            description=data['description'],
            language=data['language'],
            author=author,
            payment=data['payment'],
            price=price
        )

        course.save()

        # comments_data=data['comments']
        # for comment in comments_data:
        #     comments = Comment(user = comment['user'],message = comment['message'])
        #     course.comments.add(comments)

        return Response({'success': 'Message sent successfully'})


class ListCoursesView(APIView):
    def get(self, request):

        sortBy = request.query_params.get('sortBy')
        if not (sortBy == 'created' or sortBy == 'price' or sortBy == 'sold' or sortBy == 'name'):
            sortBy = 'created'

        order = request.query_params.get('order')
        limit = request.query_params.get('limit')

        if not limit:
            limit = 2

        if order == 'desc':
            sortBy = '-' + sortBy
            courses = Course.objects.order_by(sortBy).all()[:int(limit)]
        elif order == 'asc':
            courses = Course.objects.order_by(sortBy).all()[:int(limit)]
        else:
            courses = Course.objects.order_by(sortBy).all()

        courses = get_Courses_Serializer(courses, many=True)

        if courses:
            return Response({'courses': courses.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No courses to list'}, status=status.HTTP_404_NOT_FOUND)


class Course_Detail(APIView):
    def get(self, request, *args, **kwargs):
        id = self.kwargs['id']
        course_exists = Course.objects.filter(id=id)

        course_exists.exists()
        if course_exists:
            course = course_exists.first()
            serializer = get_Courses_Serializer(course)

            return Response({
                'success': 'true',
                'status code': status.HTTP_201_CREATED,
                "course": serializer.data
            })
        else:
            return Response({
                'success': 'true',
                'status code': status.HTTP_404_NOT_FOUND,
                "course": "Not exists"
            })


class Add_Comment_View(APIView):
    def post(self, request, course_id, *args, **kwargs):
        # course_id = self.kwargs['course_id'] or

        try:
            course = Course.objects.get(id=course_id)
        except Course.DoesNotExist:
            return Response({
                'success': 'false',
                'status code': status.HTTP_400_BAD_REQUEST,
                "message": "Course not exists"
            })

        # capture the data sent - frontend
        content = json.loads(request.body)

        if not content.get('message'):
            return Response({
                'success': 'false',
                'status code': status.HTTP_400_BAD_REQUEST,
                "message": "message is empty "
            })

        serializer = Comment_Serializer(data=content)

        if serializer.is_valid(raise_exception=True):
            comment = serializer.save(user=self.request.data['user'])

            course.comments.add(comment)

            return Response({
                'success': 'true',
                'status code': status.HTTP_200_OK,
                "message": "comment added successfully"
            })

        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
