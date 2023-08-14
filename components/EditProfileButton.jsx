const EditProfileButton = () => {
  return (
    <button
      onClick={() => {
        window.open('https://myaccount.google.com/profile', '_blank');
      }}
      className='btn-login btn-editar'
    >
      Editar
    </button>
  );
};

export default EditProfileButton;
