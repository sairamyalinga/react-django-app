from django.db import models


# Create your models here.

class Recipes(models.Model):
    title = models.TextField()
    cuisine = models.TextField()
    instructions = models.TextField()
    difficulty = models.IntegerField()
    author = models.TextField()

    def _str_(self):
        return self.title
