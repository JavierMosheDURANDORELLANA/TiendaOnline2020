import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccesosComponent } from './accesos/accesos.component';
import { TiendaComponent } from './tienda/tienda.component';
import { BarraSuperiorComponent } from './tienda/barra-superior/barra-superior.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccesosComponent,
    TiendaComponent,
    BarraSuperiorComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
