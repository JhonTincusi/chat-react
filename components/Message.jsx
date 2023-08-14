import PropTypes from 'prop-types'; // Importar PropTypes para la validación de las props
import { auth } from '../firebase'; // Importar la instancia de autenticación de Firebase

// Definir el componente Message
const Message = ({ message }) => {
  // Verificar si el mensaje fue enviado por el usuario actual
  const isCurrentUser = auth.currentUser?.uid === message.uid;
  
  // Convertir la marca de tiempo del mensaje a un objeto Date
  const date = new Date(message.timestamp?.seconds * 1000);
  
  // Opciones para formatear la fecha en formato 'mes día'
  const options = { month: 'long', day: 'numeric' };
  
  // Formatear la hora y minutos en formato 'HH:mm'
  const time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  
  // Formatear la fecha en español usando las opciones definidas
  const newDate = date.toLocaleDateString('es-ES', options);

  // Renderizar el mensaje con la información formateada
  return (
    <article className={isCurrentUser ? 'my-message' : 'message'}>
      <div>
        <div className='text-message'>
          <p className="text">{message.text}</p>
        </div>
        <p className="user">{`${newDate} - ${time}`}</p>
      </div>
      <img src={message.photo} alt="user photo" />
    </article>
  );
};

// Validar la prop 'message' utilizando PropTypes
Message.propTypes = {
  message: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    timestamp: PropTypes.shape({
      seconds: PropTypes.number.isRequired,
    }).isRequired,
    text: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message; // Exportar el componente Message
