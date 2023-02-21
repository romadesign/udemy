from rest_framework import serializers
from .models import Course, Comment, Rate, WhatLearnt, Requisite, CoursesLibrary, PaidCoursesLibrary
from .models import User
from category.serializers import Category_Serializer
from rest_framework import serializers


class RequisiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requisite
        fields = [
            "title",
            "id"
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


class user_serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'name',
        ]



class get_Course_details_Serializer(serializers.ModelSerializer):
    category = Category_Serializer(read_only=True)  # method get
    rating = serializers.IntegerField(source='get_rating', read_only=True)
    instructor_rating= serializers.IntegerField(source='get_no_rating', read_only=True)
    requisite = RequisiteSerializer(many=True)
    what_learnt = WhatLearnt_Serializer(many=True)
    comments = Comment_Serializer(many=True, read_only=True)
    author = user_serializer(read_only=True)

    class Meta:
        model = Course
        fields = [
            'id',
            'instructor_rating',
            'author',
            'title',
            'description',
            'image',
            'language',
            'payment',
            'price',
            'rating',
            'what_learnt',
            'created',
            'updated',
            'requisite',
            'status',
            'comments',
            'category'
        ]



class get_Course_details_card_Serializer(serializers.ModelSerializer):
    what_learnt = WhatLearnt_Serializer(many=True)
    rating = serializers.IntegerField(source='get_rating', read_only=True)
    author = user_serializer(read_only=True)

    class Meta:
        model = Course
        fields = [
            'id',
            'title',     
            'author',
            'description',
            'created',
            'updated',
            'what_learnt',
            'price',
            'rating',
            'image',
        ]



class post_Course_Serializer(serializers.ModelSerializer):
    # add read_only para realizar method post
    category = Category_Serializer(read_only=True)

    class Meta:
        model = Course
        fields = [
            'author',
            'title',
            'description',
            'image',
            'language',
            'payment',
            'price',
            'status',
            'category'
        ]


class data_course_my_library_serializer(serializers.ModelSerializer):
    rating = serializers.IntegerField(source='get_rating', read_only=True)
    author = user_serializer(read_only=True)

    class Meta:
        model = Course
        fields = [
            'id',
            'title',
            'price',
            'rating',
            'author',
            'image'
        ]

class data_learning_serializer(serializers.ModelSerializer):
    rating = serializers.IntegerField(source='get_rating', read_only=True)
    author = user_serializer(read_only=True)

    class Meta:
        model = Course
        fields = [
            'id',
            'title',
            'rating',
            'author',
            'image',
            'category',
            'price'
        ]


class get_my_Wishlist_Serializer(serializers.ModelSerializer):
    course = data_course_my_library_serializer(read_only=True)

    class Meta:
        model = CoursesLibrary
        fields = ['id', 'course']


class data_course_purchased_serializer(serializers.ModelSerializer):
    rating = serializers.IntegerField(source='get_rating', read_only=True)
    student_rating = serializers.IntegerField(
        source='get_no_rating', read_only=True)

    class Meta:
        model = Course
        fields = [
            'id',
            'title',
            'language',
            'price',
            'rating',
            'student_rating'
        ]


class get_my_purchased_course(serializers.ModelSerializer):
    course = data_course_purchased_serializer(read_only=True)

    class Meta:
        model = CoursesLibrary
        fields = ['id', 'course', 'user']


class get_Courses_Serializer(serializers.ModelSerializer):
    rating = serializers.IntegerField(source='get_rating', read_only=True)
    author = user_serializer(read_only=True)

    class Meta:
        model = Course
        fields = [
            'id',
            'author',
            'title',
            'image',
            'price',
            'rating',
        ]
        
class Deleted_Course_Serializer(serializers.ModelSerializer):
    author = user_serializer(read_only=True)

    class Meta:
        model = Course
        fields = [
            'id',
            'author',
            'title',
            'image',
            'payment',
            'price',
            'rating',
            'category'
        ]



class RateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = ('id', 'rate_number', 'user')

