from django.db import models

# Create your models here.
class Product(models.Model):
  name = models.CharField(max_length=50)
  image = models.CharField(max_length=50)
  description = models.CharField(max_length=50)
  brand = models.CharField(max_length=50)
  category = models.CharField(max_length=50)
  price = models.FloatField()
  countInStock = models.IntegerField()
  rating = models.IntegerField()
  numReview=models.IntegerField()