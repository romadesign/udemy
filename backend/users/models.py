from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
AGE_CHOICES=(
    ('18+','18+'),
    ('Age Restricted','Age Restricted')
)

class User(AbstractUser):
    username = models.CharField(unique=True, max_length=255, null=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=10, null=False)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    location = models.CharField(max_length=50, null=True, blank=True)
    url = models.CharField(max_length=80, null=True, blank=True)
    birthday = models.DateField(null=True, blank=True)
    profile_info = models.TextField(max_length=150, null=True, blank=True)
    age_limit=models.CharField(max_length=14,choices=AGE_CHOICES, null=True, blank=True)

    verified = models.BooleanField(default=False)
    
    total_earnings = models.IntegerField(default=0, blank=False)
    sales = models.IntegerField(default=0, blank=False)

    total_spent = models.IntegerField(default=0, blank=False)
    
    def __str__(self):
        return self.username
    
    # other
    # USERNAME_FIELD = "username"
    # REQUIRED_FIELDS = []
