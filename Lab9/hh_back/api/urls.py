from django.urls import path
from .views import list_companies, company_detail
urlpatterns = [
    path('companies/', list_companies(), name='company-list'),
    path('companies/<int:id>/', company_detail(id), name='product-detail'),
    path('companies/<int:id>/vacancies/', name='vacancy-list'),
    path('vacancies/', name='vacancy-list'),
    path('vacancies/<int:id>/', name='vacancy-detail'),
    path('vacancies/top_ten/', name='top-ten-vacancies'),
]
