import { Component} from '@angular/core';
import { Employee } from '../../models/Employee.model';
import { EmployeeService } from '../../services/employee.service';
import {  Router } from '@angular/router';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrl: './cadastro.component.css',
})
export class CadastroComponent {

	btnAcao:string = "Cadastrar!"
	btnTitulo:string = "Cadastrar Funcionário"
	constructor(private employeeService:EmployeeService, private router:Router) {}

	createEmployee(employee:Employee) {
		this.employeeService.postEmployee(employee).subscribe({
			next: (response) => {
				if (response) {
					console.log(response.data)
					this.router.navigate(['/home']);

				}
			}
		})
	}
}
