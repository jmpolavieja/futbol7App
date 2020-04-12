import { Component, OnInit } from '@angular/core';
import {ClasificacionService} from '../clasificacion.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {

  public clasif: any;
  path: any;
  active = 1;

  constructor(private clasificacion: ClasificacionService) { }

  ngOnInit() {
    this.clasif = this.clasificacion.calculaClasificacion();
    console.log(this.clasif[0]);

  }

  private sortTable() {
    this.path = '';
  }

}
