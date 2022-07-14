from django.shortcuts import render
from rest_framework import response
from rest_framework.decorators import api_view ,renderer_classes
from rest_framework.response import Response 
from rest_framework.renderers import JSONRenderer ,TemplateHTMLRenderer
# Create your views here.
from django.http import *
from django.conf import settings
from rest_framework.views import APIView
from rest_framework import permissions,generics,mixins
from rest_framework.generics import ListAPIView, RetrieveAPIView,UpdateAPIView
from .models import Auth , Articles

from django.views.decorators.csrf  import csrf_exempt
from .serielizer import Articleserializer

class ArticlesView(ListAPIView):
    queryset = Articles.objects.order_by('-date_created')
    serializer_class = Articleserializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)



class OneArticlesView(RetrieveAPIView):
    queryset = Articles.objects.order_by('-date_created')
    serializer_class = Articleserializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)
    
class TopFeaturedView(ListAPIView):
    queryset = Articles.objects.all().filter(featured = True)
    serializer_class = Articleserializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

class DelArticle(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        data = self.request.data 
        art_id = data['x']
        console.log(data['x'])
        l = Articles.objects.get(id = art_id)
        l.delete()
        return HttpResponse("delete")    


class EditArticle(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        data = self.request.data 
        title = data['products']
        user_id = data['id']
        description = data['check']
        image = data['image']
        l = Articles(Title = title , description = description , image = image, user= Auth.objects.get(id = user_id))
        l.save()

        return HttpResponse("done")  

 
 