import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() partidos: any;

  constructor() { }

  ngOnInit() {
  }

}
