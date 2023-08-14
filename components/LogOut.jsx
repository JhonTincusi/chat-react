import SignOutButton from './SignOutButton'; // Importar el componente SignOutButton
import EditProfileButton from './EditProfileButton'; // Importar el componente EditProfileButton

const LogOut = () => {
  return (
    <>
      {/* Utilizar el componente SignOutButton para el botón de cierre de sesión */}
      <SignOutButton />

      {/* Utilizar el componente EditProfileButton para el botón de edición de perfil */}
      <EditProfileButton />
    </>
  );
}

export default LogOut;
