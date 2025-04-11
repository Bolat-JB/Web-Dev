from django.urls import path
from .views import list_companies, company_detail, company_vacancies, list_vacancies, vacancy_detail, top_ten_vacancies

urlpatterns = [
    path('companies/', list_companies, name='company-list'),
    path('companies/<int:id>/', company_detail, name='product-detail'),
    path('companies/<int:id>/vacancies/', company_vacancies, name='vacancy-list'),
    path('vacancies/', list_vacancies, name='vacancy-list'),
    path('vacancies/<int:id>/', vacancy_detail, name='vacancy-detail'),
    path('vacancies/top_ten/',top_ten_vacancies, name='top-ten-vacancies'),
]
