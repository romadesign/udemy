from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import *
from courses.serializers import *
from .models import Category
from courses.models import Course
import jwt
import datetime
from rest_framework.pagination import PageNumberPagination

# Create your views here.
class ResponsePagination_My_library(PageNumberPagination):
    page_query_param = 'p'
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 5

class courses_by_categories(APIView):
    def get(self, request, *args, **kwargs):
        categories = Category.objects.all()
        serializer = Category_Serializer(categories, many=True, read_only=True)
        return Response(serializer.data)


class courses_by_categories_filter(APIView):
    def post(self, request, *args, **kwargs):
        data = self.request.data
        category = data['category']
        
        categories = Course.objects.filter(category=category)
        serializer = get_Courses_Serializer(categories, many=True)
        paginator = ResponsePagination_My_library()
        results = paginator.paginate_queryset(serializer.data, request)
        return paginator.get_paginated_response({'data': results})

