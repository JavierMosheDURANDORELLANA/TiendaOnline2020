import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { TiendaComponent } from './tienda/tienda.component';
import { DetalleProductoComponent } from './tienda/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    CarritoComponent,
    LoginComponent,
    TiendaComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
