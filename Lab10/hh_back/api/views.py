from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Company, Vacancy
import json
from django.views.decorators.csrf import csrf_exempt
from .serializers import CompanySerializerM, VacancySerializer
from rest_framework import generics
from django.http import JsonResponse
# Create your views here.
# @api_view(['GET', 'POST', 'PUT', 'DELETE'])
# def company_list(request):
#     if request.method == 'GET':
#         companies = Company.objects.all()
#         serializer = CompanySerializer(companies, many=True)
#         return JsonResponse(serializer.data)
#     elif request.method == 'POST':
#         serializer = CompanySerializer(data=request.data)
#         if serializer.is_valid():
#             company = Company.objects.create(**serializer.validated_data)
        
#             return Response(CompanySerializer(company).data, status=201)
#         return Response(serializer.errors, status=400)
#     elif request.method == 'PUT':
#         company = Company.objects.get(pk=request.data['id'])
#         serializer = CompanySerializer(company, data=request.data)
#         if serializer.is_valid():
#             company = Company.objects.create(**serializer.validated_data)
#             return Response(CompanySerializer(company).data)
#         return Response(serializer.errors, status=400)
#     elif request.method == 'DELETE':
#         company = Company.objects.get(pk=request.data['id'])
#         company.delete()
#         return Response(status=204)

# @api_view(['GET', 'PUT', 'DELETE'])
# def company_detail(request, pk):
#     try:
#         company = Company.objects.get(pk=pk)
#     except Company.DoesNotExist:
#         return Response(status=404)
#     if request.method == 'GET':
#         serializer = CompanySerializer(company)
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         serializer = CompanySerializer(company, data=request.data)
#         if serializer.is_valid():
#             company = Company.objects.create(**serializer.validated_data)
#             return Response(CompanySerializer(company).data, status=200)
#         return Response(serializer.errors, status=400)
#     elif request.method == 'DELETE':
#         company.delete()
#         return Response(status=204)
@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializerM(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        body = json.loads(request.body)
        serializer = CompanySerializerM(data=body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return JsonResponse(status=404)
    if request.method == 'GET':
        serializer = CompanySerializerM(company)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        body = json.loads(request.body)
        serializer = CompanySerializerM(company, data=body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse(status=204)
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


class VacancyListView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
class VacancyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer