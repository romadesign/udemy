from django.urls import path, include
from .views import Create_Course, ListCoursesView, Course_Detail, Add_Comment_View, Create_Requisite_View, Add_Courses_Library

urlpatterns = [
    path('register/course', Create_Course.as_view()),
    path('get-courses', ListCoursesView.as_view()),
    path('course/<int:id>/', Course_Detail.as_view()),
    path('comment/<int:course_id>', Add_Comment_View.as_view()),
    path("requisite/create/<int:course_id>",Create_Requisite_View.as_view()),
    path('add-courses-library', Add_Courses_Library.as_view()),
]
