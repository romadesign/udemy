from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import CourseSerializer
from .models import Course, Comment
from users.models import User

# Create your views here.
# class CreateCourseVIew(APIView):
#     def post(self, request):
#         serializer = CourseSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         status_code = status.HTTP_201_CREATED
#         response = {
#             'success' : 'True',
#             'status code' : status_code,
#             'message': 'User registered  successfully',
#             }
#         return Response(response, status=status_code)
    

class CreateCourseView(APIView):
    def post(self, request):
        # validation
        serializer = CourseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        data = self.request.data 
        
        author=data['author']
        price=data['price']

        if price.find(".") == -1:
            price = price + ".0"

        author = get_object_or_404(User, id=author)
      
        course = Course(
            title=data['title'],
            description=data['description'],
            language=data['language'],
            author=author,
            payment=data['payment'],
            price=price,
            )
        course.save()
        
        

        
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
            

        courses = CourseSerializer(courses, many=True)

        if courses:
            return Response({'courses': courses.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No courses to list'}, status=status.HTTP_404_NOT_FOUND)
