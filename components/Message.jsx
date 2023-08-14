import PropTypes from 'prop-types';
import MessageContent from './MessageContent';

const Message = ({ message }) => {
  return (
    <MessageContent message={message} />
  );
};

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

export default Message;
