import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
	{
		path: '',
		pathMatch:'full',
		redirectTo: 'home'
	},
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'cadastro',
		component: CadastroComponent
	},
	{
		path:'editar/:id',
		component: EditarComponent
	},
	{
		path:'detalhes/:id',
		component:DetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
