import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccesosComponent } from './accesos/accesos.component';
import { TiendaComponent } from './tienda/tienda.component';
import { BarraSuperiorComponent } from './tienda/barra-superior/barra-superior.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'accesos', component: AccesosComponent },
  {path: 'tienda', component: TiendaComponent },
  {path: 'barra-superior', component: BarraSuperiorComponent },
  {path: 'tienda', component: CatalogoComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
