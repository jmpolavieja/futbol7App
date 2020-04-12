import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jornadas',
  templateUrl: './jornadas.component.html',
  styleUrls: ['./jornadas.component.css']
})
export class JornadasComponent implements OnInit {

  jornadas = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
