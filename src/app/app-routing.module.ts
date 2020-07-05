import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadComponent } from './actividad/actividad.component';
import { MateriasComponent } from './materias/materias.component';
import { TareaComponent } from './tarea/tarea.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { AsignarTAreaComponent } from './asignar-tarea/asignar-tarea.component';
import { TareaInfoComponent } from './tarea-info/tarea-info.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DirectoComponent } from './directo/directo.component';
import { TablaDeAsistenciaComponent } from './tabla-de-asistencia/tabla-de-asistencia.component';


const routes: Routes = [

  {path: 'actividad', component: ActividadComponent},
  {path: 'materias', component: MateriasComponent},
  {path: 'tarea', component: TareaComponent},
  {path: 'calificaciones', component: CalificacionesComponent},
  {path: 'asignar', component: AsignarTAreaComponent},
  {path: 'info', component: TareaInfoComponent},
  {path: 'asistencia', component: AsistenciaComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'directo', component: DirectoComponent},
  {path: 'tabla_de_asistencia', component: TablaDeAsistenciaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
