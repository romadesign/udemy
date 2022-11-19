from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.


class User(AbstractUser):
    username = models.CharField(unique=True, max_length=255, null=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=10, null=False)

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = []
