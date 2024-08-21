from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RecipeSerializer
from .models import Recipes

# Create your views here.


class RecipeView(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipes.objects.all()
