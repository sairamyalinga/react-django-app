from django.contrib import admin
from .models import Recipes


class RecipesAdmin(admin.ModelAdmin):
    fields = ('title', 'cuisine', 'instructions', 'difficulty', 'author')

# Register your models here.


admin.site.register(Recipes, RecipesAdmin)
