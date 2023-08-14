import PropTypes from 'prop-types'; // Importar PropTypes

const MessageTime = ({ timestamp }) => {
  const date = new Date(timestamp?.seconds * 1000);
  const formattedTime = date.toLocaleTimeString('es-ES', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <p className="message-time">{formattedTime}</p>
  );
};

// Validar la prop 'timestamp' utilizando PropTypes
MessageTime.propTypes = {
  timestamp: PropTypes.shape({
    seconds: PropTypes.number.isRequired,
  }).isRequired,
};

export default MessageTime;
