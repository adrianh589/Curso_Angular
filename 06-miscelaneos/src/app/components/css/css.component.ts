import { Component, OnInit } from '@angular/core';

// Los componentes de estilo como este, UNICAMENTE aplciara para el temaplete
// de este componente

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [ `
    p{
        color: red;
      font-size: 20px;
    }
  `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
