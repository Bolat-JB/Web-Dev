from django.urls import path
from .views import ProductList, ProductDetail, CategoryList, CategoryDetail, ProductByCategory, serve_json

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', ProductByCategory.as_view(), name='products-by-category'),
    path('json/', serve_json, name='serve-json')
]