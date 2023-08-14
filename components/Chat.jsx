import React from "react";
import ChatLogic from "./ChatLogic"; // Importamos el componente ChatLogic
import Message from "./Message"; // Importamos el componente Message
import '../styles/Chat.css'; // Importamos los estilos para el componente Chat
import '../styles/Chat-messages.css'; // Importamos los estilos para los mensajes del Chat

// Definimos el componente Chat que muestra la sección de chat en la interfaz
const Chat = () => {
  return (
    <section className="chat-content"> {/* Sección de chat */}
      {/* Utilizamos el componente ChatLogic para gestionar la lógica del chat */}
      <ChatLogic
        render={({ messages, scrollRef }) => (
          <React.Fragment>
            {/* Mapeamos los mensajes y los renderizamos utilizando el componente Message */}
            {messages.map((item) => (
              <Message key={item.id} message={item} />
            ))}
            {/* Creamos una referencia para el último mensaje para el desplazamiento automático */}
            <div ref={scrollRef}></div>
          </React.Fragment>
        )}
      />
    </section>
  );
};

export default Chat; // Exportamos el componente Chat
