from django.db import models
import uuid
# Create your models here.
from django.db import models
from users.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.utils import timezone
from category.models import Category
from django.utils.translation import gettext_lazy as _
from PIL import Image

# Create your models here.


# def upload_to(instance, filename):
#     return 'courses/{0}/{1}'.format(instance.title, filename)
# https://www.appsloveworld.com/django/100/513/django-how-to-rename-images-using-a-new-auto-numbering-per-foreign-key

def upload_to(instance, filename):
    course_author = instance.author
    extension = filename.split(".")[-1]
    new_filename = "%s.%s" % (uuid.uuid4(), extension)
    return 'courses/{0}/{1}'.format(course_author, new_filename)


class Course(models.Model):

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    languages = (
        ('espanol', 'Espanol'),
        ('english', 'English'),
    )

    payment = (
        ('paid', 'Paid'),
        ('free', 'Free'),
    )

    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()

    image = models.ImageField(
        _("Image"), upload_to=upload_to, default='/courses/default.jpg')

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    what_learnt = models.ManyToManyField('WhatLearnt', blank=True)
    requisite = models.ManyToManyField('Requisite', blank=True)

    rating = models.ManyToManyField('Rate', blank=True)
    student_rating = models.IntegerField(default=0)

    language = models.CharField(max_length=50, choices=languages)

    course_length = models.CharField(default=0, max_length=20)

    comments = models.ManyToManyField('Comment', blank=True)

    payment = models.CharField(max_length=100, choices=payment, default='paid')

    price = models.DecimalField(max_digits=18, decimal_places=2)
    compare_price = models.DecimalField(
        max_digits=18, decimal_places=18, blank=True, null=True)

    category = models.ForeignKey(Category, on_delete=models.PROTECT)

    published = models.DateTimeField(default=timezone.now)
    status = models.CharField(max_length=10, choices=options, default='draft')

    def __str__(self):
        return self.title

    def get_rating(self):
        ratings = self.rating.all()
        rate = 0
        for rating in ratings:
            rate += rating.rate_number
        try:
            rate /= len(ratings)
        except ZeroDivisionError:
            rate = 0
        return rate

    def get_no_rating(self):
        return len(self.rating.all())

    # def save(self, *args, **kwargs):
    #     super(Course, self).save(*args, **kwargs)
    #     imag = Image.open(self.image.path)
    #     if imag.width > 400 or imag.height > 300:
    #         output_size = (400, 300)
    #         imag.thumbnail(output_size)

    def save(self, *args, **kwargs):
        super(Course, self).save(*args, **kwargs)
        imag = Image.open(self.image.path)
        xcenter = imag.width/2
        ycenter = imag.height/2
        x1 = xcenter - 480
        y1 = ycenter - 270
        x2 = xcenter + 480
        y2 = ycenter + 270
        cropped = imag.crop((x1, y1, x2, y2))
        cropped.save(self.image.path)


class Rate(models.Model):
    rate_number = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)])
    user = models.CharField(max_length=255)


class WhatLearnt(models.Model):
    title = models.CharField(max_length=255)
    user = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Requisite(models.Model):
    title = models.CharField(max_length=255)
    user = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Comment(models.Model):
    user = models.CharField(max_length=255)
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message


class CoursesLibrary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Bookmarked Courses Library"

    def __str__(self) -> str:
        return self.user


class PaidCoursesLibrary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Purchased Courses Library"

    def __str__(self) -> str:
        return self.user
