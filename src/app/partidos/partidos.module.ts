import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PartidosRoutingModule } from './partidos-routing.module';
import { PartidosComponent } from './partidos/partidos.component';
import { JornadasComponent } from './jornadas/jornadas.component';
import { TablaComponent } from './partidos/tabla/tabla.component';
import { EditarPartidoComponent } from './editar-partido/editar-partido.component';

@NgModule({
  declarations: [PartidosComponent, JornadasComponent, TablaComponent, EditarPartidoComponent],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    ReactiveFormsModule
  ]
})
export class PartidosModule { }
