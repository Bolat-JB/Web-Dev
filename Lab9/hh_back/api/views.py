from django.shortcuts import render
from django.http import JsonResponse
from .models import Company, Vacancy
# Create your views here.
def list_companies(request):
    data = list(Company.objects.values())
    return JsonResponse(data, safe=False)
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
        data = {
            'id': company.id,
            'name': company.name,
            'description': company.description,
            'city': company.city,
            'address': company.address
        }
        return JsonResponse(data, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = list(company.vacancies.values())
        return JsonResponse(vacancies, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)
def list_vacancies(request):
    data = list(Vacancy.objects.values())
    return JsonResponse(data, safe=False)
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        data = {
            'id': vacancy.id,
            'name': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary,
            'company_id': vacancy.company.id
        }
        return JsonResponse(data, safe=False)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = list(vacancies.values())
    return JsonResponse(data, safe=False)
