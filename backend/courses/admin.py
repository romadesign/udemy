from django.contrib import admin
from .models import Course, Comment
# Register your models here.

admin.site.register(Course) 
admin.site.register(Comment)