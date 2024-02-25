from . import views
from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('', views.index),
    path('students', views.StudentView.as_view()),
    path('login/', TokenObtainPairView.as_view()),
]
