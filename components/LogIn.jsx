// Importamos los módulos y funciones necesarios
import { auth } from '../firebase'; // Importamos la instancia de autenticación de Firebase
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Importamos módulos de autenticación de Firebase
import GoogleLoginButton from './GoogleLoginButton'; // Importamos el componente GoogleLoginButton

// Definimos el componente LogIn
const LogIn = () => {
  // Función para realizar el inicio de sesión con Google
  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider()); // Mostrar ventana emergente de inicio de sesión de Google
    } catch (error) {
      console.log(error); // Capturar y mostrar errores en la consola
    }
  };

  // Utilizamos el componente GoogleLoginButton para mostrar el botón de inicio de sesión con Google
  return <GoogleLoginButton onClick={googleSignIn} />;
};

// Exportamos el componente LogIn
export default LogIn;
