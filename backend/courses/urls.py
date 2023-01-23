from django.urls import path, include
from .views import *

urlpatterns = [
    # options for course creators
    path('register/course', Create_Course.as_view()),
    path("course/<int:course_id>/update", Update_course.as_view()),
    path('delete-course/<int:course_id>', Delete_Course.as_view()),

    path("what-learned/create/<int:course_id>", Create_what_learned.as_view()),
    path("what-learned/<int:learned_id>/update", Update_what_learned.as_view()),
    path('delete-what-learned/<int:learned_id>',
         Deleted_what_learned.as_view()),

    path("requisite/create/<int:course_id>", Create_Requisite.as_view()),
    path("requisite/<int:requisite_id>/update", Update_requisite.as_view()),
    path('delete-requisite/<int:requisite_id>', Deleted_requisite.as_view()),
    path('delete-requisite-all', Deleted_requisite_all.as_view()),

    # student options
    path('get-courses', List_Courses.as_view()),
    path('getstudents-are-viewing', get_students_are_viewing.as_view()),
    path('courses-filter', get_courses_filter_advanced.as_view()),
    path('course/<int:id>/', Course_Detail.as_view()),

    path('add-rating-course', Add_Rating.as_view()),
    path('edit-rating-course', Edit_Rating.as_view()),
    path('deleted-rating-course/<int:rating_id>', Deleted_Rating.as_view()),

    path('comment/<int:course_id>', Add_Comment.as_view()),
    path('comment/<int:comment_id>/update',
         Update_Comment_For_Student.as_view()),

    path('add-courses-library', Add_Courses_Library.as_view()),
    path('my-library', My_library.as_view()),
    path('remove-course/<int:course_of_my_bookstore_id>',
         Remove_course_from_my_library.as_view()),

    path('add-courses-to-paid', Add_Paid_Courses_Library.as_view()),
    path('my-acquired-courses', My_acquired_courses.as_view()),

]
