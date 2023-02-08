from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import *
from .models import *
from category.models import Category
from users.models import User
import json
from rest_framework.parsers import MultiPartParser, FormParser
import os
from PIL import Image
from django.db.models import Q
from django.http import JsonResponse
from rest_framework import permissions, status
from rest_framework.pagination import PageNumberPagination
from django.db import connection
# options for course creators


class Create_Course(APIView):
    def post(self, request, *args, **kwargs):
        parser_classes = [MultiPartParser, FormParser]
        # # validation
        serializer = post_Course_Serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = self.request.data

        author = data['author']
        price = data['price']
        category = data['category']

        if price.find(".") == -1:
            price = price + ".0"

        author = get_object_or_404(User, id=author)
        category = get_object_or_404(Category, id=category)

        course = Course(
            title=data['title'],
            description=data['description'],
            image=data['image'],
            language=data['language'],
            author=author,
            payment=data['payment'],
            price=price,
            category=category,
        )

        course.save()

        return Response({'success': 'Create course successfully'})


class Delete_Course(APIView):
    def post(self, request, course_id, *args, **kwargs):
        data = self.request.data
        author = data['author']

        coursegetImage = Course.objects.get(id=course_id)
        course = Course.objects.filter(id=course_id, author=author)
        delete_ratings = Deleted_Course_Serializer(course, many=True)
        comments = Comment.objects.filter(course=course_id)
        requisite = Requisite.objects.filter(course=course_id)
        if os.path.exists(coursegetImage.image.path):
            course.exists()
            if not course:
                return Response({'you cant delete a course that doesnt exist'})
            else:
                for ratings in delete_ratings.data:
                    for id in ratings['rating']:
                        data = Rate.objects.filter(id=id)
                        data.delete()
                        print(data)
                os.remove(coursegetImage.image.path)
                requisite.delete()
                comments.delete()
                course.delete()
                return Response({"Course successfully removed"})
        else:
            return Response({"The course does not exist"})


class Update_course(APIView):
    def put(self, request, course_id, *args, **kwargs):
        data = self.request.data

        title = data['title']
        description = data['description']
        language = data['language']
        author = data['author']
        payment = data['payment']
        price = data['price']
        category = data['category']
        status = data['status']
        image = data['image']

        if price.find(".") == -1:
            price = price + ".0"

        course = get_object_or_404(Course, id=course_id)
        author = get_object_or_404(User, id=author)
        category = get_object_or_404(Category, id=category)

        course.title = title
        course.description = description
        course.language = language
        course.author = author
        course.payment = payment
        course.price = price
        course.category = category
        course.status = status

        # validation image
        coursegetImage = Course.objects.get(id=course_id)
        with coursegetImage.image.open() as file:
            url_image = file

        if image != url_image:
            os.remove(coursegetImage.image.path)
            course.image = image

        course.save()
        return Response({'success': 'update course successfully'})


class Create_what_learned(APIView):
    def post(self, request, course_id, *args, **kwargs):
        data = self.request.data
        author = data['user']
        title = data['title']

        course = get_object_or_404(Course, id=course_id)
        learned = WhatLearnt(title=title, user=author)
        learned.save()

        course.what_learnt.add(learned)

        return Response({'success': 'data added successfully'})


class Update_what_learned(APIView):
    def post(self, request, learned_id, *args, **kwargs):
        data = self.request.data
        user = data['user']
        title = data['title']

        getlearned = WhatLearnt.objects.filter(id=learned_id, user=user)
        learned = get_object_or_404(WhatLearnt, id=learned_id)

        if not getlearned:
            return Response({
                "message": "You can't edit this requirement because it doesn't belong to you"
            })
        else:
            learned.user = user
            learned.title = title
            learned.save()
            return Response({
                "message": "data edit successfully"
            })


class Deleted_what_learned(APIView):
    def post(self, request, learned_id, *args, **kwargs):
        data = self.request.data
        user = data['user']

        validate_learned = WhatLearnt.objects.filter(id=learned_id, user=user)
        learned = get_object_or_404(WhatLearnt, id=learned_id)

        if not validate_learned:
            return Response({
                "message": "You can't do this option"
            })
        else:
            learned.delete()
            return Response({'Deleted learned_'})


class Create_Requisite(APIView):
    def post(self, request, course_id, *args, **kwargs):

        data = self.request.data
        author = data['user']

        title = data['title']
        course = get_object_or_404(Course, id=course_id)

        requisite = Requisite(title=title, user=author)
        requisite.save()

        course.requisite.add(requisite)

        return Response({'success': 'data added successfully'})


class Update_requisite(APIView):
    def post(self, request, requisite_id, *args, **kwargs):
        data = self.request.data
        user = data['user']
        title = data['title']

        getrequisite = Requisite.objects.filter(id=requisite_id, user=user)
        requisite = get_object_or_404(Requisite, id=requisite_id)

        if not getrequisite:
            return Response({
                "message": "You can't edit this requirement because it doesn't belong to you"
            })
        else:
            requisite.user = user
            requisite.title = title
            requisite.save()
            return Response({
                "message": "requisite edit successfully"
            })


class Deleted_requisite(APIView):
    def post(self, request, requisite_id, *args, **kwargs):
        data = self.request.data
        user = data['user']

        validate_requisite = Requisite.objects.filter(
            id=requisite_id, user=user)
        requisite = get_object_or_404(Requisite, id=requisite_id)

        if not validate_requisite:
            return Response({
                "message": "You can't do this option"
            })
        else:
            requisite.delete()
            return Response({'Deleted requisite'})


class Deleted_requisite_all(APIView):
    def post(self, request, *args, **kwargs):
        data = self.request.data
        author = data['user']
        requirements = data['requirements']

        validate_user = Course.objects.filter(author=author)

        if not validate_user:
            return Response({
                "message": "You can't do this option"
            })
        else:
            for requisite_id in requirements:
                requisite = get_object_or_404(Requisite, id=requisite_id)
                requisite.delete()

            return Response({
                "message": "Data deleted successfully"
            })


# student options
class List_Courses(APIView):
    def get(self, request):
        sortBy = request.query_params.get('sortBy')
        if not (sortBy == 'created' or sortBy == 'price' or sortBy == 'sold' or sortBy == 'rating'):
            sortBy = 'created'

        order = request.query_params.get('order')
        limit = request.query_params.get('limit')

        if not limit:
            limit = 10

        if order == 'desc':
            sortBy = '-' + sortBy
            courses = Course.objects.order_by(sortBy).all()[:int(limit)]
        elif order == 'asc':
            courses = Course.objects.order_by(sortBy).all()[:int(limit)]
        else:
            courses = Course.objects.order_by(sortBy).all()

        courses = get_Courses_Serializer(courses, many=True)

        paginator = ResponsePagination()
        results = paginator.paginate_queryset(courses.data, request)
        return paginator.get_paginated_response({'data': results})

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
            serializer = get_Course_details_Serializer(course)

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

class Course_Detail_card(APIView):
    def get(self, request, *args, **kwargs):
        id = self.kwargs['id']
        course_exists = Course.objects.filter(id=id)

        course_exists.exists()
        if course_exists:
            course = course_exists.first()
            serializer = get_Course_details_card_Serializer(course)

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

# class Get_Comments(APIView):
#     def get(self, request, *args, **kwargs):
#         data = self.request.data
#         author = data['user']
#         return paginator.get_paginated_response({'comments': results})

class Add_Comment(APIView):
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


class Update_Comment_For_Student(APIView):
    def post(self, request, comment_id, *args, **kwargs):
        data = self.request.data
        user = data['user']
        message = data['message']

        # verificando que el coment_id y user_id sean los correctos
        validate_comment = Comment.objects.filter(id=comment_id, user=user)
        comment = get_object_or_404(Comment, id=comment_id)

        if not validate_comment:
            return Response({
                "message": "You can't edit this comment because it's not yours"
            })
        else:
            comment.user = user
            comment.message = message
            comment.save()
            return Response({
                "message": "comment edit successfully"
            })


class Add_Courses_Wishlist(APIView):
    def post(self, request, *args, **kwargs):

        data = self.request.data
        author = data['user']
        courses = data['course']

        # Trae al user y course ni no se coloca no funcionan
        user = User.objects.get(id=author)
        course = Course.objects.get(id=courses)

        # validar si ya esta agregado
        course_exists = CoursesLibrary.objects.filter(user=user, course=course)
        course_exists.exists()
        if not course_exists:
            courses_list = CoursesLibrary(user=user, course=course)
            courses_list.save()

            return Response({
                'success': 'true',
                'status code': status.HTTP_201_CREATED,
                "course": "Curso agregado a favoritos"
            })
        else:
            return Response({
                'success': 'true',
                'status code': status.HTTP_404_NOT_FOUND,
                "course": "Ya tienes agregado este curso"
            })


class Wishlist(APIView):
    def post(self, request, *args, **kwargs):
        data = self.request.data
        author = data['user']
        get_my_library = CoursesLibrary.objects.filter(user=author)
        serializer = get_my_Wishlist_Serializer(get_my_library, many=True)

        paginator = ResponsePagination()
        results = paginator.paginate_queryset(serializer.data, request)
        return paginator.get_paginated_response({'data': results})


class Remove_course_from_my_Wishlist(APIView):
    def post(self, request, course_of_my_bookstore_id, *args, **kwargs):
        data = self.request.data
        user = data['user']
        course = data['course']

        validate_course = CoursesLibrary.objects.filter(
            course=course, user=user)
        added_course = get_object_or_404(
            CoursesLibrary, id=course_of_my_bookstore_id)
        if not validate_course:
            return Response({
                "message": "You can't do this option"
            })
        else:
            added_course.delete()
            return Response({'Deleted requisite'})
        return ""


class Add_Paid_Courses_learning(APIView):
    def post(self, request, *args, **kwargs):

        data = self.request.data
        author = data['user']
        courses = data['course']

        user = User.objects.get(id=author)
        course = Course.objects.get(id=courses)

        course_exists = PaidCoursesLibrary.objects.filter(
            user=user, course=course)
        course_exists.exists()

        if not course_exists:
            course_list = PaidCoursesLibrary(user=user, course=course)
            course_list.save()

            return Response({
                'success': 'true',
                'status code': status.HTTP_201_CREATED,
                "course": "Curso comprado"
            })
        else:
            return Response({
                'success': 'true',
                'status code': status.HTTP_404_NOT_FOUND,
                "course": "Ya comprastes este curso"
            })


class learning(APIView):
    def post(self, request, *args, **kwargs):
        sort = request.query_params.get('sort')
        if not (sort == 'course__title' or sort == '-course__title'):
            sort = 'id'

        data = self.request.data
        author = data['user']

        My_acquired_courses = PaidCoursesLibrary.objects.filter(user=author).order_by(
            sort).select_related('course').prefetch_related('course__rating')
        results = []
        for i in My_acquired_courses:
            itemLibrary = {}
            itemLibrary['id'] = i.id

            course = Course.objects.filter(id=i.course.id)
            itemLibrary['course'] = data_learning_serializer(
                course.first()).data

            rating = i.course.rating.filter(user=author)
            if rating.exists():
                itemLibrary['rating'] = RateSerializer(rating.first()).data
            results.append(itemLibrary)

        paginator = ResponsePagination()
        results = paginator.paginate_queryset(results, request)
        return paginator.get_paginated_response({'data': results})


class get_courses_filter_advanced(APIView):
    def get(self, request, *args, **kwargs):

        sortBy = request.query_params.get('sortBy')
        if not (sortBy == 'created' or sortBy == 'price' or sortBy == 'rating'):
            sortBy = 'created'

        order = request.query_params.get('order')
        limit = request.query_params.get('limit')

        min_price = request.query_params.get('min_price')
        max_price = request.query_params.get('max_price')

        rating = request.query_params.get('rating')

        if not limit:
            limit = 6
        if not min_price:
            min_price = 1
        if not max_price:
            max_price = 100
        # if not rating:
        #     rating = 5

        if order == 'desc':
            sortBy = '-' + sortBy

            if rating:
                courses = Course.objects.filter(Q(price__gte=min_price) & Q(
                    price__lte=max_price)).filter(rating__rate_number=rating).order_by(sortBy)[:int(limit)]
            else:
                courses = Course.objects.filter(Q(price__gte=min_price) & Q(
                    price__lte=max_price)).order_by(sortBy)[:int(limit)]

        elif order == 'asc':

            if rating:
                courses = Course.objects.filter(Q(price__gte=min_price) & Q(
                    price__lte=max_price)).filter(rating__rate_number=rating).order_by(sortBy)[:int(limit)]
            else:
                courses = Course.objects.filter(Q(price__gte=min_price) & Q(
                    price__lte=max_price)).order_by(sortBy)[:int(limit)]
        else:
            courses = Course.objects.order_by(sortBy)[:int(limit)]

        courses = get_Courses_Serializer(courses, many=True)

        if courses:
            return Response({'courses': courses.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No courses to list'}, status=status.HTTP_404_NOT_FOUND)


class Add_Rating(APIView):
    def post(self, request, *args, **kwargs):

        data = self.request.data
        author = data['user']
        course_id = data['course']
        rating = data['rate_number']

        # before
        # with connection.cursor() as cursor:
        #     cursor.execute(
        #         "SELECT courses_rate.id FROM courses_rate JOIN courses_course_rating CR ON CR.rate_id=courses_rate.id  WHERE courses_rate.user = %s AND CR.course_id = %s",
        #         (author, course_id))

        #     #.fetchone() trae para un dato  , fetchall() para varios datos
        #     verification_data = cursor.fetchone()
        #     if verification_data is not None:
        #         return Response({'success': 'you already added your assessment to the course'})
        #     else:
        #         # verification_data = verification_data
        #         course = get_object_or_404(Course, id=course_id)
        #         rating = Rate(rate_number=rating, user=author)
        #         rating.save()
        #         course.rating.add(rating)
        #         return Response({'success': 'evaluation of the course satisfactorily'})

        # after
        rating_course_exists = Rate.objects.filter(
            user=author, course__id=course_id)
        print(rating_course_exists)
        rating_course_exists.exists()
        if not rating_course_exists:
            course = get_object_or_404(Course, id=course_id)
            rating = Rate(rate_number=rating, user=author)
            rating.save()
            course.rating.add(rating)
            return Response({'success': 'evaluation of the course satisfactorily'})
        else:
            return Response({'success': 'you already added your assessment to the course'})


class Edit_Rating(APIView):
    def post(self, request, *args, **kwargs):
        data = self.request.data
        id = data['id']
        author = data['user']
        new_rating = data['new_rating']

        getRating = Rate.objects.get(id=id, user=author)
        rate = get_object_or_404(Rate, id=getRating.id)

        if getRating:
            rate.user = author
            rate.rate_number = new_rating
            rate.save()
            return Response({
                "message": "rating edited successfully"
            })


class Deleted_Rating(APIView):
    def post(self, request, rating_id, *args, **kwargs):
        data = self.request.data
        user = data['user']

        validate_learned = Rate.objects.filter(id=rating_id, user=user)
        learned = get_object_or_404(Rate, id=rating_id)

        if not validate_learned:
            return Response({
                "message": "You can't do this option"
            })
        else:
            learned.delete()
            return Response({'rating erased'})


class ResponsePagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 2
    page_size_query_param = 'page_size'
    max_page_size = 8


class get_students_are_viewing(APIView):
    def post(self, request, *args, **kwargs):
        data = self.request.data
        rating = data['option']

        courses = Course.objects.filter(rating__rate_number=rating)
        serializers = get_Courses_Serializer(courses, many=True)

        paginator = ResponsePagination()
        results = paginator.paginate_queryset(serializers.data, request)
        return paginator.get_paginated_response({'data': results})


class get_my_search(APIView):
    def post(self, request, *args, **kwargs):
        data = self.request.data
        title = data['option']

        courses = Course.objects.filter(title__icontains=title)
        serializers = get_Courses_Serializer(courses, many=True)

        paginator = ResponsePagination()
        results = paginator.paginate_queryset(serializers.data, request)
        return paginator.get_paginated_response({'data': results})
