import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartidosComponent} from './partidos/partidos.component';
import {JornadasComponent} from './jornadas/jornadas.component';
import {EditarPartidoComponent} from './editar-partido/editar-partido.component';

const routes: Routes = [
  {
    path: 'editarPartido/:partido',
    component: EditarPartidoComponent
  },
  {
    path: 'partidos/:idJornada',
    component: PartidosComponent
  },
  {
    path: '',
    component: JornadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
