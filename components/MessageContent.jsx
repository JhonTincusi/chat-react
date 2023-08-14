import PropTypes from 'prop-types';
import { auth } from '../firebase';
import MessageHeader from './MessageHeader'; // ¡Asegúrate de importar correctamente!

const MessageContent = ({ message }) => {
  const isCurrentUser = auth.currentUser?.uid === message.uid;

  return (
    <article className={isCurrentUser ? 'my-message' : 'message'}>
      <MessageHeader message={message} />
    </article>
  );
};

MessageContent.propTypes = {
  message: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    timestamp: PropTypes.shape({
      seconds: PropTypes.number.isRequired,
    }).isRequired,
    text: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageContent;
