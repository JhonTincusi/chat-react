import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import GoogleLoginButton from './GoogleLoginButton'; // Importamos el componente GoogleLoginButton

const LogIn = () => {
  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  };

  // Utilizamos el componente GoogleLoginButton para mostrar el botón de inicio de sesión con Google
  return <GoogleLoginButton onClick={googleSignIn} />;
};

export default LogIn;
