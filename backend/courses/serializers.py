from rest_framework import serializers
from .models import Course, Comment
from category.serializers import Category_Serializer


class Comment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            # 'user', 
            'message'
        ]
        

class get_Courses_Serializer(serializers.ModelSerializer):
    category = Category_Serializer(read_only=True) #add read_only para realizar method post 
    comments = Comment_Serializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = [
            'author',
            'title',
            'description',
            'language',
            'payment',
            'price',
            'status',
            'comments',
            'category'
        ]
        