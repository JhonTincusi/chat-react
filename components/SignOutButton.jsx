import { auth } from '../firebase';

const SignOutButton = () => {
  const signOut = () => auth.signOut();

  return (
    <button onClick={signOut} className='btn-login btn-logout'>
      <i className="fa-brands fa-google"></i> Salir
    </button>
  );
};  

export default SignOutButton;
