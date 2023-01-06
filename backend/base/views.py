from django.shortcuts import render
from django.http.response import JsonResponse
# Create your views here.
def getRoutes(request):
  route="Hi Sushant Aryal"
  return JsonResponse(route,safe=False)