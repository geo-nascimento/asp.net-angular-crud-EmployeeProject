import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EmployeeFormComponent } from './componentes/employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './pages/editar/editar.component';
import { DetailsComponent } from './pages/details/details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteEmployeeComponent } from './componentes/delete-employee/delete-employee.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CadastroComponent,
		EmployeeFormComponent,
		EditarComponent,
		DetailsComponent,
  DeleteEmployeeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		//Angular Material
		MatButtonModule,
		MatCardModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
		MatDialogModule,
	],
	providers: [provideAnimationsAsync()],
	bootstrap: [AppComponent],
})
export class AppModule {}
