import {Component, Input, OnDestroy} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  @Input() results: any[] = [];

  // results: any[] =  [
  //   {
  //     "name": "Crysis 3",
  //     "value": 8940000
  //   },
  //   {
  //     "name": "NFS: Most Wanted",
  //     "value": 5000000
  //   },
  //   {
  //     "name": "Twisted Metal: Black",
  //     "value": 7200000
  //   }
  // ];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Juegos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';
  intervalo;

  colorScheme = 'nightLights';

  constructor() {

    // this.intervalo = setInterval(() =>{
    //   const newResults = [...this.results];
    //   for(let i in newResults){
    //     newResults[i].value = Math.round(Math.random() * 100)
    //   }
    //   this.results = [...newResults];
    // }, 1500); SE REALIZO POR LAS PRUEBAS

  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnDestroy(){
    // clearInterval(this.intervalo); REALIZADO POR LAS PRUEBAS
  }
}
