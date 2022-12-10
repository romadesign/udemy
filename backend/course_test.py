# from category.models import Category
# from users.models import User
# from courses.models import Course, WhatLearnt
from faker import Faker
import random
import os
import django
from django.shortcuts import get_object_or_404
import tempfile
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "api.settings")
from django.core.files.uploadedfile import SimpleUploadedFile

fake = Faker()


categories = [
    "Javascript",
    "Python",
    "CC+",
    "Angular",
    "Php",
    "Html5",
    "React Js",
    "Vue JS",
    "Desarrollo web",
    "Backend",
    "Frontend",
    "Full Stack",
    "Laravel",
    "Next Js"
]

data = ""


def categories_test(data):
    for categorie in categories:
        name = categorie
        obj = Category.objects.get_or_create(
            name=name,
        )


def course_test(value):
    for _i in range(value):
        author = User.objects.get(id=random.randint(1, 2))
        title = fake.text(max_nb_chars=65)
        description = fake.text()
        image = 'courses/romacode/f976e25d-e572-49c4-b5f4-cc0752469409.png'
        language = "espanol"
        payment = "free"
        price = random.randint(1, 20)
        status = "published"
        category = Category.objects.get(id=random.randint(1, 14))
        obj = Course.objects.get_or_create(
            author=author,
            title=title,
            description=description,
            image=image,
            language=language,
            payment=payment,
            price=price,
            status=status,
            category=category
        )


def main():
    no = int(input("how many recors you want to send"))
    #categories_test(no)
    course_test(no)


if __name__ == "__main__":
    django.setup()
    from category.models import Category
    from users.models import User
    from courses.models import Course, WhatLearnt
 
    main()


# create data
# python course__test.py
# https://stackoverflow.com/questions/48163641/django-core-exceptions-appregistrynotready-apps-arent-loaded-yet-django-2-0
# https://www.youtube.com/watch?v=c9FPZiOtXVU&t=769s