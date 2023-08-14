import PropTypes from 'prop-types';
import { auth } from '../firebase';

const MessageHeader = ({ message }) => {
  const isCurrentUser = auth.currentUser?.uid === message.uid;
  const date = new Date(message.timestamp?.seconds * 1000);
  const options = { month: 'long', day: 'numeric' };
  const time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  const newDate = date.toLocaleDateString('es-ES', options);

  return (
    <div className={isCurrentUser ? 'my-message' : 'message'}>
      <div className='text-message'>
        <p className="text">{message.text}</p>
      </div>
      <p className="user">{`${newDate} - ${time}`}</p>
      <img src={message.photo} alt="user photo" />
    </div>
  );
};

MessageHeader.propTypes = {
  message: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    timestamp: PropTypes.shape({
      seconds: PropTypes.number.isRequired,
    }).isRequired,
    text: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageHeader;
