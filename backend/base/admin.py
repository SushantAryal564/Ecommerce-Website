from django.contrib import admin
from .models import *
# Register your models here.
# admin.site.register(Order);
@ admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
  list_display = ['id','name']
@ admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
  list_display = ['id','name']
@ admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
  list_display = ['id','user']
@ admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
  list_display = ['id','name']
@ admin.register(ShippingAddress)
class ShippingAddressAdmin(admin.ModelAdmin):
  list_display = ['id','city']
