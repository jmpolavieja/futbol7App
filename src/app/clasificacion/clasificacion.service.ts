import { Injectable } from '@angular/core';
import {CLASIFICACIONA, CLASIFICACIONB} from './mockClasificacion';
import {PartidosService} from '../partidos/partidos.service';
import { Partido } from '../partidos/partido';


@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {

  partidosTodos = [];
  clasificacionA = CLASIFICACIONA;
  clasificacionB = CLASIFICACIONB;
  clasificacionWork = [];
  posicion: any;

  constructor(
    private partidos: PartidosService
  ) { }

  getClasificacion() {
    // Leer los partidos jugados, añadir datos a la calsificación, devolver la clasificación
    let mipartido;
    this.partidosTodos = this.partidos.getPartidos();
    console.warn(this.clasificacionA);
    let grupo = 'A';
    let found: any;
    for (let i = 0; i < 6; i = i + 3) {
      console.log(grupo);
      found = '';
      for (let y = 0; y < 3; y++ ) {
        mipartido = this.partidosTodos[i + y];
        console.log('Mi partido:');
        console.log(mipartido);
        const equipo = mipartido.local;
        console.log('Equipo: ' + equipo);
        found = this.clasificacionA.find(equip => equip = equipo);
        console.log(found.equipo);
      }
      if (grupo === 'A') {
        // Proceso en la clasificacion A
        grupo = 'B';
      } else {
        grupo = 'A';
      }
    }
    // Calcular la clasificación del grupoA

    return this.clasificacionB;
  }

  calculaClasificacion() {
      // leer el partido, si es del grupo A lo mando a procesaGrupoA, sino a procesaGrupoB
    this.partidosTodos = this.partidos.getPartidos();
    this.partidosTodos.forEach((partido: Partido) => {
      // extraer primera letra del índice
      const grupo = partido.id[0];
      if (grupo === 'A') {
        // procesar el equipo local del partido del grupo A
        const equipoLocal = partido.local;
        const equipoVisit = partido.visit;
        // encontrar índice del equipo en la calsificacionA
        this.clasificacionA.forEach( (lineaEquipo) => {
          if ( equipoLocal === lineaEquipo.equipo) {
            this.posicion = lineaEquipo.pos - 1;
            this.modificaClasificacion(grupo, partido.gL, partido.gV);
          } else if ( equipoVisit === lineaEquipo.equipo ) {
            this.posicion = lineaEquipo.pos - 1;
            this.modificaClasificacion(grupo, partido.gV, partido.gL);
          }
        });
      } else {
        // procesar partido del grupo B
        // procesar el equipo local del partido del grupo A
        const equipoLocal = partido.local;
        const equipoVisit = partido.visit;
        // encontrar índice del equipo en la calsificacionA
        this.clasificacionB.forEach( (lineaEquipo) => {
          if ( equipoLocal === lineaEquipo.equipo) {
            this.posicion = lineaEquipo.pos - 1;
            this.modificaClasificacion(grupo, partido.gL, partido.gV);
          } else if ( equipoVisit === lineaEquipo.equipo ) {
            this.posicion = lineaEquipo.pos - 1;
            this.modificaClasificacion(grupo, partido.gV, partido.gL);
          }
        });
      }
    });
    this.ordenaClasificacion();
    this.clasificacionWork.push(this.clasificacionA);
    this.clasificacionWork.push(this.clasificacionB);
    return this.clasificacionWork;
  }

  modificaClasificacion(grupo, gf: number, gc: number ) {
     if (grupo === 'A') {
       this.clasificacionA[this.posicion].gf += gf;
       this.clasificacionA[this.posicion].gc += gc;
       this.clasificacionA[this.posicion].pj ++;
       if (gf > gc) {
        // partido ganado
        this.clasificacionA[this.posicion].pg++;
        this.clasificacionA[this.posicion].ptos += 3;
      } else if (gf < gc) {
        this.clasificacionA[this.posicion].pp++;
      } else {
        this.clasificacionA[this.posicion].pe++;
        this.clasificacionA[this.posicion].ptos++;
      }
    } else {
       this.clasificacionB[this.posicion].gf += gf;
       this.clasificacionB[this.posicion].gc += gc;
       this.clasificacionB[this.posicion].pj ++;
       if (gf > gc) {
         // partido ganado
         this.clasificacionB[this.posicion].pg++;
         this.clasificacionB[this.posicion].ptos += 3;
       } else if (gf < gc) {
         this.clasificacionB[this.posicion].pp++;
       } else {
         this.clasificacionB[this.posicion].pe++;
         this.clasificacionB[this.posicion].ptos++;
       }
     }
  }

  private ordenaClasificacion() {
    this.clasificacionA.sort((a, b) => {
      if (a.ptos > b.ptos) {
        return -1;
      }
      if (a.ptos < b.ptos) {
        return 1;
      }
      if ((a.gf - a.gc) > (b.gf - b.gc)) {
        return -1;
      }
      if ((a.gf - a.gc) < (b.gf - b.gc)) {
        return 1;
      }
      return 0;
    });
    this.clasificacionB.sort((a, b) => {
      if (a.ptos > b.ptos) {
        return -1;
      }
      if (a.ptos < b.ptos) {
        return 1;
      }
      if ((a.gf - a.gc) > (b.gf - b.gc)) {
        return -1;
      }
      if ((a.gf - a.gc) < (b.gf - b.gc)) {
        return 1;
      }
      return 0;
    });
  }
}
