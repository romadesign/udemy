from django.db import models

# Create your models here.
from django.db import models
from users.models import User
from django.core.validators import MaxValueValidator,MinValueValidator
from django.utils import timezone
from category.models import Category

# Create your models here.
class Comment(models.Model):
    user =              models.CharField(max_length=255)
    message =           models.TextField()
    created =           models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.message

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
    
    author =            models.ForeignKey(User, on_delete=models.CASCADE)
    title =             models.CharField(max_length=255)
    description =       models.TextField()
    
    created =           models.DateTimeField(auto_now_add=True)
    updated =           models.DateTimeField(auto_now=True)
    
    language =          models.CharField(max_length=50, choices=languages)
    
    course_length =     models.CharField(default=0,max_length=20)
  
    comments =          models.ManyToManyField(Comment, blank=True)
    
    payment =           models.CharField(max_length=100, choices=payment, default='paid')
    
    price =             models.DecimalField(max_digits=18, decimal_places=2)
    compare_price =     models.DecimalField(max_digits=18,decimal_places=18, blank=True, null=True)
      
    category =          models.ForeignKey(Category, on_delete=models.PROTECT)
    
    published =         models.DateTimeField(default=timezone.now)
    status =            models.CharField(max_length=10, choices=options, default='draft')
    
    
    def __str__(self):
        return self.title



      
