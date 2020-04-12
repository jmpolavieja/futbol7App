import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {PartidosService} from '../partidos.service';
import {Partido} from '../partido';

@Component({
  selector: 'app-editar-partido',
  templateUrl: './editar-partido.component.html',
  styleUrls: ['./editar-partido.component.css']
})
export class EditarPartidoComponent implements OnInit {


  partido: Partido;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private partidos: PartidosService
  ) { }

  ngOnInit() {
    this.getMatch();
  }

  getMatch() {
    const id = this.route.snapshot.paramMap.get('partido');
    this.partido = this.partidos.getPartido(id);
  }

}
