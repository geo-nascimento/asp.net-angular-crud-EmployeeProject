import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';//Para capturar o id vindo pelo dialog
import { Employee } from '../../models/Employee.model';

@Component({
	selector: 'app-delete-employee',
	templateUrl: './delete-employee.component.html',
	styleUrl: './delete-employee.component.css',
})
export class DeleteEmployeeComponent implements OnInit {
	inputData: any;
	employee!: Employee;

	constructor(
		private employeeService: EmployeeService,
		private router: Router,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private ref:MatDialogRef<DeleteEmployeeComponent>//Para fechar a caixa de dialogo
	) {}

	ngOnInit(): void {
		this.inputData = this.data; //Captura do id vindo no dialog
		
		this.employeeService.getEmployeeById(this.inputData.id).subscribe({
			next: (data) => {
				if (data) {
					this.employee = data.data;
				}
			},
		});
	}

	cancel() {
		this.ref.close()
	}

	deleteEmployee() {
		this.employeeService.deleteEmployee(this.inputData.id).subscribe({
			next:(data) => {
				if (data && data.success === true) {
					this.ref.close();
					window.location.reload();
				}
			},
			error: (erro) => console.log(erro)
		})
	}
}
