from django.urls import path
from base import views
urlpatterns = [
    path("products/<int:pk>",views.product_api, name="products item"),
    path("products/",views.product_api, name="products"),
    path("",views.getRoutes)
]