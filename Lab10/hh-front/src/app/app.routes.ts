import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent} from './vacancies/vacancies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'companies/:id', component: CompaniesComponent},
  {path: 'companies/:id/vacancies', component: CompanyDetailsComponent},
  {path: 'vacancies', component: VacanciesComponent},
  {path: 'vacancies/:id', component: VacanciesComponent},

];
