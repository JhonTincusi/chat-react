import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Importar PropTypes
import { database } from '../firebase';
import { query, orderBy, onSnapshot, collection } from 'firebase/firestore';

const ChatLogic = ({ render }) => {
  const [messages, setMessages] = useState([]); // Estado local para almacenar los mensajes
  const scrollRef = useRef(); // Referencia para controlar el scroll

  useEffect(() => {
    const unsubscribe = listenToMessages(); // Suscripción a los cambios en la base de datos
    return () => unsubscribe(); // Cancelar suscripción cuando el componente se desmonte
  }, []);

  const listenToMessages = () => {
    const q = query(collection(database, 'messages'), orderBy('timestamp')); // Consulta a la base de datos
    return onSnapshot(q, (querySnapshot) => {
      setMessages(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))); // Actualizar los mensajes
    });
  };

  useEffect(() => {
    // Scroll automático hacia abajo al recibir nuevos mensajes
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [messages]);

  return (
    <React.Fragment>
      {render({ messages, scrollRef })} {/* Renderizar la función de renderización con los mensajes y la referencia de scroll */}
    </React.Fragment>
  );
};

// Validar la prop 'render' utilizando PropTypes
ChatLogic.propTypes = {
  render: PropTypes.func.isRequired,
};

export default ChatLogic;
