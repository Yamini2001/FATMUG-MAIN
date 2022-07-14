from django.contrib import admin
from django.urls import path
from . import views 
from .views import *
urlpatterns = [
    path('', ArticlesView.as_view() , name = ""),
    path('edit' , EditArticle.as_view() , name =""),
    path('delete' ,DelArticle.as_view() , name =""),
    path('rated' , TopFeaturedView.as_view() , name =""),
    path('<slug>' , OneArticlesView.as_view() , name =""),
    
   
]
