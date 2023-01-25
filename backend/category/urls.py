from django.urls import path, include
from .views import *

# from .views import Create_Course, ListCoursesView, Course_Detail, Add_Comment_View

urlpatterns = [
    # path('register/course', Create_Course.as_view()),
    path('get-category', courses_by_categories.as_view()),
    path('get-course-by-category', courses_by_categories_filter.as_view()),
]
