import {Component, Input, OnInit} from '@angular/core';
import {ClasificacionService} from '../../clasificacion.service';

@Component({
  selector: 'app-tab-clas',
  templateUrl: './tab-clas.component.html',
  styleUrls: ['./tab-clas.component.css']
})
export class TabClasComponent implements OnInit {

  @Input() grupo: any;
  @Input() letra: string;

  constructor() { }

  ngOnInit() {
    console.log(this.grupo);
  }

}
