import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccesosComponent } from './accesos/accesos.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'accesos', component: AccesosComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
