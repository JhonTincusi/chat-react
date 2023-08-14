import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = {
  apiKey: "AIzaSyCpHAjtKYCeuyCdryShReAx2OFcSJYiuVA",
  authDomain: "chat-app-33a01.firebaseapp.com",
  projectId: "chat-app-33a01",
  storageBucket: "chat-app-33a01.appspot.com",
  messagingSenderId: "320828742530",
  appId: "1:320828742530:web:59c5857d728ec979a60d9b"
}

const app = initializeApp(firebaseApp); //Para inicializar la aplicacion de firebase
const auth = getAuth(app); //Para la autenticacion de usuarios
const database = getFirestore(app); //Para almacenar y sincronizar datos en tiempo real
export { app, auth, database } //Exportar configuacion

