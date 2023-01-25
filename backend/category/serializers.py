from rest_framework import serializers
from .models import *


class Category_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'name'
        ]


class Serializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
