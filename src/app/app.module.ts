import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './app/nav-bar/nav-bar.component';
import { ActividadComponent } from './actividad/actividad.component';
import { MateriasComponent } from './materias/materias.component';
import { TareaComponent } from './tarea/tarea.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { AsignarTAreaComponent } from './asignar-tarea/asignar-tarea.component';
import { TareaInfoComponent } from './tarea-info/tarea-info.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DirectoComponent } from './directo/directo.component';
import { TablaDeAsistenciaComponent } from './tabla-de-asistencia/tabla-de-asistencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ActividadComponent,
    MateriasComponent,
    TareaComponent,
    CalificacionesComponent,
    AsignarTAreaComponent,
    TareaInfoComponent,
    AsistenciaComponent,
    ProfesoresComponent,
    AlumnosComponent,
    DirectoComponent,
    TablaDeAsistenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
