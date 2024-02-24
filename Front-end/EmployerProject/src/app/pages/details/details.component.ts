import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/Employee.model';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {

	employee?: Employee;
	id!:number;

	constructor(
		private employeeService: EmployeeService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.id = +this.route.snapshot.paramMap.get('id')!;

		this.employeeService.getEmployeeById(this.id).subscribe({
			next: (data) => {
				const dados = data.data;

				dados.createdAt = new Date(dados.createdAt!).toLocaleDateString(
					'pt-BR'
				);
				dados.lastModifiedAt = new Date(
					dados.lastModifiedAt!
				).toLocaleDateString('pt-BR');

				this.employee = dados;
			},
		});
	}

	inactivateEmployee() {
		this.employeeService.putInactivateEmployee(this.id).subscribe({
			next: (data) => {
				if (data && data.success === true) {
					this.router.navigate(['/home']);
				}
			},
			error: (err) => {
				console.log(err)
			}
		})
	}
}
