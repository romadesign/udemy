from rest_framework import serializers
from .models import Course, Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'user', 
            'message'
        ]

class CourseSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)

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
            'comments'
        ]