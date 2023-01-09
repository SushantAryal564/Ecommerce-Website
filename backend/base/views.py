from .product import products
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
# def getRoutes(request):
#   route="Hi Sushant Aryal"
#   return JsonResponse(route,safe=False)

# def getProducts(request):
#   return JsonResponse(products,safe=False)
@api_view(['GET','POST','PUT'])
def product_api(request,pk=None):
  if request.method == "GET":
    print(pk);
    if(pk is not None):
      for items in products:
        if(pk == items['_id']):
          return Response(items);
  return Response(products);

@api_view(['GET','POST'])
def getRoutes(request):
  routes=[]
  return Response(routes);