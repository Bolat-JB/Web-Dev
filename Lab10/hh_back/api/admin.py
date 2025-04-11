from django.contrib import admin
from .models import Company, Vacancy
# Register your models here.
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address')
    search_fields = ('name', 'description', 'city', 'address')
    list_filter = ('city', 'name')
@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'company', 'name', 'description', 'salary')
    search_fields = ('name', 'description', 'salary')
    list_filter = ('company',)