import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cartas-pelis',
  templateUrl: './cartas-pelis.component.html',
  styles: [
  ]
})
export class CartasPelisComponent implements OnInit {

  @Input('results')results;

  constructor() { }

  ngOnInit(): void {
  }

}
