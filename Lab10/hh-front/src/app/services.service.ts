import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from './models/company';
// import * as http from 'node:http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url: string = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  getCompanies():Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/api/companies/`);
  }
  createCompanies(company: any):Observable<any> {
    return this.http.put(`${this.url}/api/companies/`, company);
  }
  deleteCompanies(id: number):Observable<any> {
    return this.http.delete(`${this.url}/api/companies/${id}`);
  }
  getCompaniesByID(id: number):Observable<any> {
    return this.http.get<any>(`${this.url}/api/companies/${id}/`);
  }
  getCompanyVacancies(id: number):Observable<any> {
    return this.http.get<any>(`${this.url}/api/companies/${id}/vacancies/`);
  }
}
