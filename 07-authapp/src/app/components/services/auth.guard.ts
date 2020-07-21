import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate { // Este guard es cuando entran a la ruta

  constructor( private auth: AuthService ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot, // Ruta a la cual quieren entrar
    state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.isAuthenticated$; // Estado actual, se retorna si esta autenticado o no
  }

}
