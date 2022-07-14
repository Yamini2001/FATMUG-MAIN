from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

class Auth(models.Model):
    name = models.CharField(max_length=25)
    password = models.CharField(max_length=8)
    email = models.EmailField(max_length=254,unique = True)
    is_admin = models.BooleanField(default=False) # a superuser
    avatar = models.ImageField(upload_to='profile_photo/%Y/%m/%d', null=True, blank=True)
    date_created = models.DateTimeField(default=datetime.now, blank=True)
    
    
    
    def __str__(self):
        return self.email



class Articles(models.Model):
     slug  = models.SlugField()
     Title  = models.CharField(max_length =50)
     description = models.TextField()
     image = models.ImageField(upload_to='photos/%Y/%m/%d')
     date_created = models.DateTimeField(default=datetime.now, blank=True)
     featured = models.BooleanField(default=False)
     user = models.ForeignKey(Auth, on_delete=models.CASCADE , blank=True,null=True )

     def __str__(self):
        return self.Title


     


		
	