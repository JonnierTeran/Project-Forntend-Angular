import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PruebaComponent } from './PruebaComponent/Prueba.component';
import { TerminalComponentComponent } from './terminal-component/terminal-component.component';
import { ApiComponent } from './api/api.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormulariosComponentComponent } from './formularios-component/formularios-component.component';

const routes: Routes = [
  {path: '' , component: AppComponent},
  {path: 'home' , component: HomeComponentComponent},
  {path: 'Dinamic', component: PruebaComponent},
  {path: 'Dinamic/:Nombre', component: PruebaComponent},
  {path: 'Edad', component: TerminalComponentComponent},
  {path: 'Api', component: ApiComponent},
  {path: 'Pipe', component: PipeComponentComponent},
  {path: 'Forms/Data', component: FormulariosComponentComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
