from rest_framework import serializers
from .models import Articles ,Auth

class UserSerializer(serializers.ModelSerializer):
    class Meta :
        model = Auth
        fields = '__all__'
        Lookup_field = 'slug'

class Articleserializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta :
        model = Articles
        fields = '__all__'
        Lookup_field = 'slug'
        