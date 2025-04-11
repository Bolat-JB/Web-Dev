from django.shortcuts import render
from django.http import JsonResponse
from .models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
import json
from api.serializers import  CompanySerializer, VacancySerializer
@csrf_exempt
def list_companies(request):
    if request.method == 'GET':
        company = Company.objects.values()
        serializer = CompanySerializer(company, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        body = json.loads(request.body)
        serializer = CompanySerializer(data=body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)

    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'PUT':
        body = json.loads(request.body)
        serializer = CompanySerializer(company, data=body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors, status=400)
    if request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'Company deleted'}, status=204) 
   
@csrf_exempt
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)

    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)
    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def list_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            serializer = VacancySerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            else:
                return JsonResponse(serializer.errors, status=400)
            
        except json.JSONDecodeError as e:
            return JsonResponse({"error": "Invalid JSON format", "details": str(e)}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)


@csrf_exempt
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)

    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)
    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'PUT':
        body = json.loads(request.body)
        serializer = VacancySerializer(vacancy, data=body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors, status=400)
    if request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'Vacancy deleted'}, status=204)
    
@csrf_exempt
def top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        data = list(vacancies.values())
        return JsonResponse(data, safe=False)
