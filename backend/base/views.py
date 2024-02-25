from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import serializers
from .models import Student
from rest_framework import status

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


@api_view(['GET'])
def index(req):
    return Response({'msg':'helloooo'})


# get,post
# @permission_classes([IsAuthenticated])
class StudentView(APIView):
    def get(self, request):
        my_model = Student.objects.all()
        serializer = StudentSerializer(my_model, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   

# cors - install/config
# restapi - install/config
# simplejwt - install/config