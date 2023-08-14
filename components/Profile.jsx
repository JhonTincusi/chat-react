import LogIn from './LogIn'; // Importamos el componente de inicio de sesión
import LogOut from './LogOut'; // Importamos el componente de cierre de sesión
import { useAuthState } from 'react-firebase-hooks/auth'; // Importamos el hook para escuchar cambios en el estado de autenticación
import { auth } from '../firebase'; // Importamos la instancia de autenticación de Firebase
import '../styles/User.css'; // Importamos los estilos para el componente de perfil

const Profile = () => {
  // Obtenemos el estado actual de autenticación del usuario y sus datos (si está autenticado)
  const [user] = useAuthState(auth);

  // Verificamos si el usuario está autenticado
  const isLoggedIn = !!user;

  // Obtenemos la foto y el nombre del usuario actual o por defecto
  const photo = isLoggedIn ? user.photoURL : "/user.jpg";
  const name = isLoggedIn ? user.displayName : "Iniciar Sesión";

  return (
    <div className='right-side'>
      {/* Renderizamos el artículo que muestra la tarjeta del usuario */}
      <article className='card-user'>
        {/* Mostramos la foto del usuario */}
        <img src={photo} alt="user default" />
        {/* Mostramos el nombre del usuario */}
        <p>{name}</p>
        {/* Renderizamos el componente Login o Logout */}
        {isLoggedIn ? <LogOut /> : <LogIn />}
        {/* Agregamos una línea horizontal como separador */}
        <hr />
      </article>
    </div>
  );
}

export default Profile;
