import {Component, OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <app-css></app-css>

    <app-clases></app-clases>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      At fuga minima odit possimus quam quibusdam voluptates!
    </p>

    <p appResaltado color="blue"> <!-- asi mandamos parametros hacia las directivas -->
      Hola mundo
    </p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit,
AfterContentChecked, AfterContentInit, OnChanges, DoCheck{

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(){
    console.log("ngOnInit");
  }

  ngOnDestroy(){ // Se llama al cambiar de pantalla
    console.log("ngOnDestroy");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

}
