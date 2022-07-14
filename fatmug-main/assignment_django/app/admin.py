from django.contrib import admin

# Register your models here.
from .models import Auth 
from .models import Articles

admin.site.register(Auth)
admin.site.register(Articles)
