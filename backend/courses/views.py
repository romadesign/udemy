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
        comments = Comment.objects.filter(course=course_id)
        requisite = Requisite.objects.filter(course=course_id)

        if os.path.exists(coursegetImage.image.path):
            course.exists()
            if not course:
                return Response({'you cant delete a course that doesnt exist'})
            else:
                os.remove(coursegetImage.image.path)
                requisite.delete()
                comments.delete()
                course.delete()
                return Response({"The file exist"})
        else:
            return Response({"The file does not exist"})


class Update_course(APIView):
    def post(self, request, course_id, *args, **kwargs):
        data = self.request.data

        title = data['title']
        description = data['description']
        language = data['language']
        author = data['author']
        payment = data['payment']
        price = data['price']
        category = data['category']
        status = data['status']

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


class Add_Courses_Library(APIView):
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


class My_library(APIView):
    def get(self, request, *args, **kwargs):
        data = self.request.data
        author = data['user']
        get_my_library = CoursesLibrary.objects.filter(user=author)
        serializer = get_my_library_Serializer(get_my_library, many=True)

        paginator = ResponsePagination_My_library()
        results = paginator.paginate_queryset(serializer.data, request)
        return paginator.get_paginated_response({'library': results})


class Remove_course_from_my_library(APIView):
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


class Add_Paid_Courses_Library(APIView):
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


class My_acquired_courses(APIView):
    def get(self, request, *args, **kwargs):

        sort = request.query_params.get('sort')
        if not (sort == 'course__title' or sort == '-course__title'):
            sort = 'id'

        data = self.request.data
        author = data['user']

        get_my_library = PaidCoursesLibrary.objects.filter(
            user=author).order_by(sort)
        results_my_library = []
        # capture my course add library
        for i in get_my_library:

            itemLibrary = {}
            itemLibrary['id'] = i.id
            itemLibrary['courseId'] = i.course.id
            itemLibrary['title'] = i.course.title
            # itemLibrary['description'] = i.course.description
            itemLibrary['image'] = i.course.image.url  # verification not path
            itemLibrary['authorId'] = i.user.id
            itemLibrary['author'] = i.user.name

            # capture my rating
            results_my_rating = []
            for r in i.course.rating.all():
                selected_rating = Rate.objects.filter(id=r.id, user=author)
                selected_rating.exists()

                if selected_rating:
                    rate = {}
                    my_rating_data = Rate.objects.get(id=selected_rating[0].id)
                    rate['id'] = my_rating_data.id
                    rate['rate_number'] = my_rating_data.rate_number
                    rate['userId'] = my_rating_data.user
                    results_my_rating.append(rate)

            itemLibrary['rating'] = results_my_rating

            results_my_library.append(itemLibrary)

        paginator = ResponsePagination_My_library()
        results = paginator.paginate_queryset(results_my_library, request)
        return paginator.get_paginated_response({'data': results})


class get_courses_filter_advanced(APIView):
    def get(self, request, *args, **kwargs):

        sortBy = request.query_params.get('sortBy')
        if not (sortBy == 'created' or sortBy == 'price' or sortBy == 'sold' or sortBy == 'rating'):
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
        #     rating = 2

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

        # capture id my rating
        with connection.cursor() as cursor:
            cursor.execute(
                "SELECT courses_rate.id FROM courses_rate JOIN courses_course_rating CR ON CR.rate_id=courses_rate.id  WHERE courses_rate.user = %s AND CR.course_id = %s",
                (author, course_id))

            #.fetchone() trae para un dato  , fetchall() para varios datos
            verification_data = cursor.fetchone()
            if verification_data is not None:
                return Response({'success': 'you already added your assessment to the course'})
            else:
                # verification_data = verification_data
                course = get_object_or_404(Course, id=course_id)
                rating = Rate(rate_number=rating, user=author)
                rating.save()
                course.rating.add(rating)
                return Response({'success': 'evaluation of the course satisfactorily'})


class Edit_Rating(APIView):
    def post(self, request, *args, **kwargs):
        data = self.request.data
        author = data['user']
        rating = data['rate_number']
        new_rating = data['new_rating']

        getRating = Rate.objects.get(rate_number=rating, user=author)
        rate = get_object_or_404(Rate, id=getRating.id)

        if getRating:
            rate.user = author
            rate.rate_number = new_rating
            rate.save()
            return Response({
                "message": "rating edited successfully"
            })


class ResponsePagination_My_library(PageNumberPagination):
    page_query_param = 'p'
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 10
