import PropTypes from 'prop-types'; // Importar PropTypes
import GoogleButton from 'react-google-button';

const GoogleLoginButton = ({ onClick }) => {
  return <GoogleButton onClick={onClick} />;
};

// Validar la prop 'onClick' utilizando PropTypes
GoogleLoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GoogleLoginButton;
