import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Mensaje} from "../interface/mensaje";
import {map} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore,
              public auth: AngularFireAuth)
  {
    this.auth.onAuthStateChanged( user => {
      console.log( 'Estado del usuario', user )
      if( user == null ){
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid; // El uid es unico

      console.log(this.usuario);

    } );
  }

  login( proveedor: string ) {
    if(proveedor == 'google'){
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else if(proveedor === 'github'){
      this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    }

  }

  logout() {
    this.usuario = {};
    this.auth.signOut();
  }

  cargarMensajes() {

    this.itemsCollection = this.afs.collection<Mensaje>(
      'chats', ref => ref.orderBy('fecha', 'asc').limitToLast(5));


    return this.itemsCollection.valueChanges()// Pendiente a todos los cambios de del items Collections, Los observables tienen el metodo SUBSCRIBE
      .pipe(
        map((mensajes: Mensaje[]) => { // El map trabaja con la respuesta de un observable, la transforma y vuelve a regresar algo a l oque nossotros nos podemos suscribir
          console.log(mensajes)
          this.chats = mensajes;
        })
      )
  }

  agregarMensajes(texto: string) {
    // TODO falta el UID del usuario
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add(mensaje); //Esto es todo apra hacer una insercion a firebase

  }
}
