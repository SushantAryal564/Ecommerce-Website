from .product import products
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
# Create your views here.
# def getRoutes(request):
#   route="Hi Sushant Aryal"
#   return JsonResponse(route,safe=False)

# def getProducts(request):
#   return JsonResponse(products,safe=False)
@api_view(['GET','POST','PUT'])
def product_api(request,pk=None):
  if request.method == "GET":
    if(pk is not None):
      product = Product.objects.get(id = pk);
      print(product);
      serializer = ProductSerializer(product, many = False);
      return Response(serializer.data);
  stu = Product.objects.all()
  serializer = ProductSerializer(stu, many=True);
  return Response(serializer.data);