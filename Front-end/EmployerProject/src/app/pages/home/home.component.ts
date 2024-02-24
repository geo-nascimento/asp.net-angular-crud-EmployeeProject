import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

import { Employee } from '../../models/Employee.model';
import { DeleteEmployeeComponent } from '../../componentes/delete-employee/delete-employee.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
	employees: Array<Employee> = [];
	generalEmployee: Array<Employee> = [];

	tableColumns: string[] = [
		'Situação',
		'Nome',
		'Sobrenome',
		'Departamento',
		'Ações',
		'Excluir',
	];

	constructor(
		private employeeService: EmployeeService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe({
			next: (response) => {
				if (response) {
					const dados = response.data;

					dados.map((item) => {
						item.createdAt = new Date(
							item.createdAt!
						).toLocaleDateString('pt-BR');
						item.lastModifiedAt = new Date(
							item.lastModifiedAt!
						).toLocaleDateString('pt-BR');
					});

					this.employees = dados;
					this.generalEmployee = dados;
				}
			},
			error: (err) => console.log(err),
		});
	}

	search(event: Event) {
		const target = event.target as HTMLInputElement;
		const value = target.value.toLocaleLowerCase();

		this.employees = this.generalEmployee.filter((item) => {
			return item.name.toLocaleLowerCase().includes(value);
		});
	}

	openDialog(
		enterAnimationDuration: string,
		exitAnimationDuration: string,
		id:number
	): void {
		this.dialog.open(DeleteEmployeeComponent, {
			width: '450px',
			height:'450px',
			enterAnimationDuration,
			exitAnimationDuration,
			data: {
				id: id
			}
		});

	}
}

