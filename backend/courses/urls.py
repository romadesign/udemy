from django.urls import path, include
from .views import Create_Course, ListCoursesView

urlpatterns = [
    path('register/course', Create_Course.as_view()),
    path('get-courses', ListCoursesView.as_view()),
]