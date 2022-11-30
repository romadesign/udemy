from rest_framework import serializers
from .models import Course, Comment, Rate, WhatLearnt, Requisite
from category.serializers import Category_Serializer
from rest_framework import serializers


class RequisiteSerializer(serializers.ModelSerializer):
    class Meta:
        model= Requisite
        fields = [
            "title",
            # "id"
        ]

class WhatLearnt_Serializer(serializers.ModelSerializer):
    class Meta:
        model = WhatLearnt
        fields = '__all__'


class Comment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'user', 
            'message'
        ]
        

class get_Courses_Serializer(serializers.ModelSerializer):
    category = Category_Serializer(read_only=True) #method get 
    rating=serializers.IntegerField(source='get_rating', read_only=True)
    requisite = RequisiteSerializer(many=True)
    comments = Comment_Serializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = [
            'id',
            'author',
            'title',
            'description',
            'language',
            'payment',
            'price',
            'rating',
            'what_learnt',
            'requisite',
            'status',
            'comments',
            'category'
        ]
        
        
class post_Course_Serializer(serializers.ModelSerializer):
    category = Category_Serializer(read_only=True) #add read_only para realizar method post 

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
            'category'
        ]
        