import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {PartidosService} from '../partidos.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidosGA = [];
  partidosGB = [];

  constructor(
    private route: ActivatedRoute,
    private partidos: PartidosService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPartidos();
  }

  getPartidos() {
    const idJornada = Number(this.route.snapshot.paramMap.get('idJornada'));
    this.partidos.getJornada(idJornada)
      .subscribe(partidos => this.getGrupos(partidos));

  }

  getGrupos(data: Array<any>) {
    console.log(data);
    this.partidosGA = data[0];
    this.partidosGB = data[1];
  }

  goBack() {
    this.location.back();
  }
}
