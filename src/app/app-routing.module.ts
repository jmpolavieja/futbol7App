import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./clasificacion/clasificacion.module').then(m => m.ClasificacionModule)
  },
  {
    path: 'partidos',
    loadChildren: () => import('./partidos/partidos.module').then(m => m.PartidosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
