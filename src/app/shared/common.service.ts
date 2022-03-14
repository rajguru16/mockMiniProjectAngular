import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  url = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) {}

  saveData(employee: any) {
    return this.http.post(this.url, employee);
  }

  getData() {
    return this.http.get(this.url);
  }

  deleteData(employeeId: number) {
    return this.http.delete(this.url + '/' + employeeId);
  }

  getSingleEmployee(empid: number): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/' + empid);
  }


  updateEmployee(employee:Employee):Observable<Employee>{
    console.log(employee.id)
    return this.http.put<Employee>(this.url+'/'+employee.id,employee)
  }

  

  companyUrl = 'http://localhost:3000/company';

  saveCompanyData(companyData) {
    return this.http.post(this.companyUrl, companyData);
  }

  getComapanyData() {
    return this.http.get(this.companyUrl);
  }

  deleteCompanyData(companyId: number) {
    return this.http.delete(this.companyUrl + '/' + companyId);
  }

  getSingleCompanyData(comapnyId:number):Observable<Company>{
    return this.http.get<Company>(this.companyUrl+'/'+comapnyId)
  }

  updateCompany(companyObj:Company):Observable<Company>{
    return this.http.put<Company>(this.companyUrl+'/'+companyObj.id,companyObj)
  }


}
