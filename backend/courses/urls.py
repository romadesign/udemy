from django.urls import path, include
from .views import Create_Course, ListCoursesView, Course_Detail, Add_Comment_View

urlpatterns = [
    path('register/course', Create_Course.as_view()),
    path('get-courses', ListCoursesView.as_view()),
    path('course/<int:id>/', Course_Detail.as_view()),
    path('comment/<int:course_id>', Add_Comment_View.as_view()),
]
