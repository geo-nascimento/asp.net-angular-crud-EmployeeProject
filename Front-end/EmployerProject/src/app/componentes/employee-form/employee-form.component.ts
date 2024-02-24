import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/Employee.model';

@Component({
	selector: 'app-employee-form',
	templateUrl: './employee-form.component.html',
	styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {
	employeeForm!: FormGroup;

	@Output() onSubmit = new EventEmitter<Employee>();

	@Input() btnAcao!: string;
	@Input() btnTitulo!: string;
	@Input() employeeData:Employee | null = null;

	constructor() {}

	ngOnInit(): void {

		this.employeeForm = new FormGroup({
			id: new FormControl(this.employeeData ? this.employeeData.id : 0),
			name: new FormControl(this.employeeData ? this.employeeData.name : '', [Validators.required]),
			lastname: new FormControl(this.employeeData ? this.employeeData.lastName : '', [Validators.required]),
			department: new FormControl(this.employeeData ? this.employeeData.department : '', [Validators.required]),
			workshift: new FormControl(this.employeeData ? this.employeeData.workShift : '', [Validators.required]),
			active: new FormControl(this.employeeData ? this.employeeData.active : true),
			createdAt: new FormControl(new Date()),
			lastModifiedAt: new FormControl(new Date()),
		});
	}

	submit() {
		this.onSubmit.emit(this.employeeForm.value);
	}
}
