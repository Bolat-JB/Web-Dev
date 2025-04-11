from .serializers import ProductSerializer, CategorySerializer
from rest_framework import generics
from .models import Product, Category
import json
from django.http import JsonResponse
from django.conf import settings
import os

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductByCategory(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Product.objects.filter(category_id=category_id)

def serve_json(request):
    json_file_path = os.path.join(settings.BASE_DIR, 'data', 'products.json')
    try:
        with open(json_file_path, 'r') as file:
            data = json.load(file)
            return JsonResponse(data, safe=False, content_type="application/json")
    except FileNotFoundError:
        return JsonResponse({'error': 'File not found'}, status=404)