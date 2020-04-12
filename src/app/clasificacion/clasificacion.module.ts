import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasificacionRoutingModule } from './clasificacion-routing.module';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import { TabClasComponent } from './clasificacion/tab-clas/tab-clas.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ClasificacionComponent,
    TabClasComponent
  ],
  imports: [
    CommonModule,
    ClasificacionRoutingModule,
    NgbModule
  ]
})
export class ClasificacionModule { }
