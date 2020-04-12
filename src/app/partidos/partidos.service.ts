import { Injectable } from '@angular/core';
import { PARTIDOS } from './mockPartidos';
import {Observable, of} from 'rxjs';
import {Partido} from './partido';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  partidos = PARTIDOS;
  partidosGA = [];
  partidosGB = [];
  partidosJornada = [];
  partidosTodos = [];
  inicio = 0;
  fin = 0;


  constructor() { }

  getJornada(idJornada: number): Observable<any[]> {
    // Inicializar la jornada
    this.partidosGA = [];
    this.partidosGB = [];
    this.inicio = (idJornada - 1) * 6 ;
    this.fin = idJornada * 6;
    this.rellenaPartidos(idJornada);

    // Devuelve los partidos de la jornada
    return of(this.partidosJornada);
  }

  rellenaPartidos(idJornada: number) {
    let ref: number;
    if (idJornada > 0) {
      ref = 3;
    } else {
      ref = 0;
    }
    for (let i = this.inicio; i < this.fin; i++) {
      if (i < this.fin - ref) {
        this.partidosGA.push(this.partidos[i]);
      } else {
        this.partidosGB.push(this.partidos[i]);
      }
    }
    if (idJornada > 0) {
      this.partidosJornada.push(this.partidosGA);
      this.partidosJornada.push(this.partidosGB);
    } else {
      this.partidosTodos.push(this.partidosGA);
      this.partidosTodos.push(this.partidosGB);
    }
  }
  // Devolver todos los partidos jugados
  getPartidos() {
    return this.partidos;
  }

  getPartido(id: string) {
    // extraer el grupo
    let partido: Partido;
    for (partido of this.partidos) {
      if (partido.id === id) {
        return partido;
      }
    }
  }
}
