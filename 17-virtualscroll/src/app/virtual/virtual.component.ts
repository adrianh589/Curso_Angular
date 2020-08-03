import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport; // Toma como referencia un elemento del HTML el viewchild



  personas = Array(10000).fill(0);

  constructor() { }

  ngOnInit(): void {
    console.log(this.personas);
  }

  irFinal(): void{
    this.viewport.scrollToIndex(this.personas.length);
  }

  irAlaMitad(): void{
    this.viewport.scrollToIndex(this.personas.length/2);
  }

  irAlPrincipio(): void{
    this.viewport.scrollToIndex(this.personas[0]);
  }


}
