import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Importar PropTypes
import { database } from '../firebase';
import { query, orderBy, onSnapshot, collection } from 'firebase/firestore';

const ChatLogic = ({ render }) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    const unsubscribe = listenToMessages();
    return () => unsubscribe();
  }, []);

  const listenToMessages = () => {
    const q = query(collection(database, 'messages'), orderBy('timestamp'));
    return onSnapshot(q, (querySnapshot) => {
      setMessages(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [messages]);

  return (
    <React.Fragment>
      {render({ messages, scrollRef })}
    </React.Fragment>
  );
};

// Validar la prop 'render' utilizando PropTypes
ChatLogic.propTypes = {
  render: PropTypes.func.isRequired,
};

export default ChatLogic;
