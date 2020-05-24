import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccesosComponent } from './accesos/accesos.component';
import { TiendaComponent } from './tienda/tienda.component';
import { BarraSuperiorComponent } from './tienda/barra-superior/barra-superior.component';
import { CatalogoComponent } from './tienda/catalogo/catalogo.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { LoginService } from './servicios/login.service';

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
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
