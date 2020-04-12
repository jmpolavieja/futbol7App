import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClasificacionComponent} from './clasificacion/clasificacion.component';

const routes: Routes = [
  {
    path: '',
    component: ClasificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificacionRoutingModule { }
