import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee.model';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-editar',
	templateUrl: './editar.component.html',
	styleUrl: './editar.component.css',
})
export class EditarComponent implements OnInit {
	btnAcao: string = 'Editar!';
	btnTitulo: string = 'Editar Funcionário';
	employee!: Employee;

	constructor(
		private employeeService: EmployeeService,
		private activatedRoute: ActivatedRoute,
		private router:Router
	) {}

	ngOnInit(): void {
		const id: number = +this.activatedRoute.snapshot.paramMap.get('id')!;

		this.employeeService.getEmployeeById(id).subscribe({
			next: (response) => {
				if (response) {
					this.employee = response.data;
				}
			},
		});
	}

	editEmployee(employee:Employee) {
		this.employeeService.putEmployee(employee).subscribe({
			next: (response) => {
				if (response) {
					this.router.navigate(['/home']);
				}
			}
		})
	}
}
