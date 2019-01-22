import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { PortadaComponent } from './component/portada/portada.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { FotosComponent } from './component/fotos/fotos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Navbar2Component } from './component/navbar2/navbar2.component';
import { RegistroComponent } from './component/registro/registro.component';
import { RegistroSesionComponent } from './component/registro-sesion/registro-sesion.component';
import { HabitacionTarjetaComponent } from './component/habitacion-tarjeta/habitacion-tarjeta.component';
import { HabitacionesComponent } from './component/habitaciones/habitaciones.component';
import { HabitacionComponent } from './component/habitacion/habitacion.component';
import { ActividadesComponent } from './component/actividades/actividades.component';
import { ConfirmarReservaComponent } from './component/confirmar-reserva/confirmar-reserva.component';
import { UltimoPasoComponent } from './component/ultimo-paso/ultimo-paso.component';
import { PortadaAdministradorComponent } from './component/portada-administrador/portada-administrador.component';

//rutas
import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

 //servicios
 import { HeroesService } from 'src/app/servicio/habitacion.service';
import { Navbar3Component } from './component/navbar3/navbar3.component';
import { AddHabitacionComponent } from './component/add-habitacion/add-habitacion.component';
import { EliminarHuespedComponent } from './component/eliminar-huesped/eliminar-huesped.component';





@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    NavbarComponent,
    NosotrosComponent,
    FotosComponent,
    RegistroComponent,
    Navbar2Component,
    RegistroSesionComponent,
    HabitacionTarjetaComponent,
    HabitacionesComponent,
    HabitacionComponent,
    ActividadesComponent,
    ConfirmarReservaComponent,
    UltimoPasoComponent,
    PortadaAdministradorComponent,
    Navbar3Component,
    AddHabitacionComponent,
    EliminarHuespedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    NgbModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
