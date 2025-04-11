from django.urls import path
from .views import company_list, company_detail, company_vacancies, VacancyListView, VacancyDetailView
urlpatterns = [
    path('companies/', company_list, name='companies'),
    path('companies/<int:id>/', company_detail, name='company_detail'),
    path('companies/<int:id>/vacancies/', company_vacancies, name='company_vacancies'),
    path('vacancies/', VacancyListView.as_view(), name='vacancy_list'),
    path('vacancy/<int:id>/', VacancyDetailView.as_view(), name='vacancy_detail'),
]
