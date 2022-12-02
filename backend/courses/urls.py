from django.urls import path, include
from .views import Create_Course, List_Courses_View, Course_Detail, Add_Comment_View, Create_Requisite_View, Add_Courses_Library, Add_Paid_Courses_Library, Delete_Course, Update_course, Update_Comment_For_Student

urlpatterns = [
    # options for course creators
    path('register/course', Create_Course.as_view()),
    path('delete-course/<int:course_id>', Delete_Course.as_view()),
    path("requisite/create/<int:course_id>", Create_Requisite_View.as_view()),
    path("course/<int:course_id>/update", Update_course.as_view()),

    # student options
    path('get-courses', List_Courses_View.as_view()),
    path('course/<int:id>/', Course_Detail.as_view()),
    path('comment/<int:course_id>', Add_Comment_View.as_view()),
    path('comment/<int:comment_id>/update', Update_Comment_For_Student.as_view()),
    path('add-courses-library', Add_Courses_Library.as_view()),
    path('add-courses-to-paid', Add_Paid_Courses_Library.as_view()),
]
