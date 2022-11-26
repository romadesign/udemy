from django.contrib import admin
from .models import Course, Comment, Rate, WhatLearnt, Requisite
# Register your models here.

admin.site.register(Course) 
admin.site.register(Comment)
admin.site.register(Rate)
admin.site.register(WhatLearnt)
admin.site.register(Requisite)