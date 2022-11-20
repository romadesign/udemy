from django.urls import path, include
from .views import CreateCourseView, ListCoursesView

urlpatterns = [
    path('register/course', CreateCourseView.as_view()),
    path('get-courses', ListCoursesView.as_view()),
]