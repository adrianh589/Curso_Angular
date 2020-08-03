import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

import * as express from 'express';
import * as cors from 'cors';

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firestore-grafica-4df96.firebaseio.com"
});

const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

//CORS: Se usa para que el servidor acepte peticiones de dominios distintos

//Para lanzar el servido de forma local ejecutar el comando: firebase serve (similar a ng serve de angular)

//IMPORTANTE LANZAR NPM RUN BUILD PARA QUE TYPESCRIPT CONSTRUYA LA COMPILACION A JAVASCRIPT
//NOTA: para evitar lanzar tsc --watch, En webstorm dirigirse a File -> Settings -> Languages & Frameworks -> Typescript y seleccionar Recompile on changes

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.json({
    mensaje: "Hola mundo desde funciones de FireBase"
  });
});

export const getGoty = functions.https.onRequest( async (request, response) => {
  

  
});

//Express -> para hacer servicios REST
const app = express();
app.use( cors({ origin: true }) ); // De esta manera permitimos cualquier peticion de cualquier dominio

app.get('/goty', async (req, resp) =>{

  const gotyRef = db.collection('goty');
  const docsSnap = await gotyRef.get();
  const juegos = docsSnap.docs.map( (doc: any) => doc.data() );

  resp.json( juegos );
});

app.post('/goty/:id', async (req, resp) =>{
  const id = req.params.id;
  const gameRef = db.collection('goty').doc(id);
  const gameSnap = await gameRef.get();

  if(!gameSnap.exists){
    resp.status(400).json({
      ok: false,
      mensaje: 'No existe un jeugo con ese id ' + id
    });
  }else{

    const antes = gameSnap.data() || { votos: 0 };
    await gameRef.update({
      votos: antes.votos += 1
    });

    resp.json({
      ok: true,
      mensaje: `Gracias por tu voto a ${ antes.name }`
    });

  }
});

export const api = functions.https.onRequest( app ); // Decirle a firebase que estamos corriendo un servidor express en otro lado
