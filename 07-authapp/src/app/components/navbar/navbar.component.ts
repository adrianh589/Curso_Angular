import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  public usuario;

  constructor(
    public auth: AuthService
  ) {
    this.auth.userProfile$.subscribe( perfil => {
      console.log(perfil);
      this.usuario = perfil;
    });
  }

  ngOnInit(): void {

  }

}
