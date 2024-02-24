import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee.model';
import { Response } from '../models/Response';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	private apiUrl = `${environment.API_URL}/employee`;

	constructor(private http: HttpClient) {}

	public getEmployees(): Observable<Response<Array<Employee>>> {
		return this.http.get<Response<Array<Employee>>>(this.apiUrl);
	}

	public getEmployeeById(id:number): Observable<Response<Employee>> {
		return this.http.get<Response<Employee>>(`${this.apiUrl}/${id}`);
	}

	public postEmployee(employee:Employee): Observable<Response<Array<Employee>>> {
		return this.http.post<Response<Array<Employee>>>(this.apiUrl, employee);
	}

	public putEmployee(employee:Employee): Observable<Response<Array<Employee>>> {
		return this.http.put<Response<Array<Employee>>>(this.apiUrl,employee);
	}

	public putInactivateEmployee(id:number): Observable<Response<Array<Employee>>> {
		return this.http.put<Response<Array<Employee>>>(`${this.apiUrl}/inactivate/${id}`, id)
	}

	public deleteEmployee(id:number):Observable<Response<Array<Employee>>> {
		return this.http.delete<Response<Array<Employee>>>(`${this.apiUrl}/${id}`)
	}
}
