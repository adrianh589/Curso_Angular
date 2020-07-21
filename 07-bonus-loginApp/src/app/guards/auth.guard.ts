import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {// Can activate sirve para cuando se entre a dicha ruta, se pueda activar el acceso o no del usuario segun las especificaciones que nosotros demos

constructor(private auth: AuthService,
            private router: Router) {

}

  canActivate(): boolean{
    if(this.auth.estaAutenticado()){
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
