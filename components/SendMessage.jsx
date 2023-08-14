import { useState } from "react"; // 'useState' para gestionar el estado
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; // Importamos funciones de Firestore
import { auth, database } from '../firebase'; // Instancia de autenticación y base de datos de Firebase

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState(''); // Definimos el estado 'input' para el contenido del mensaje

  // Función para manejar cambios en el input
  const handleInputChange = (e) => {
    setInput(e.target.value); // Actualizamos el estado 'input' con el valor del input
  };

  // Función para manejar el envío del mensaje
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (input === '') { // Comprobamos si el mensaje está vacío
      alert('Please enter a valid message'); // Mostramos una alerta si el mensaje está vacío
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser; // Obtenemos el UID, nombre y URL de la foto del usuario actual
    await addDoc(collection(database, 'messages'), { // Agregamos el mensaje a la colección 'messages' en Firestore
      text: input, // Contenido del mensaje
      name: displayName, // Nombre del usuario
      uid, // UID del usuario
      photo: photoURL, // URL de la foto del usuario
      timestamp: serverTimestamp() // Agregamos la marca de tiempo del servidor para el mensaje
    });
    setInput(''); // Limpiamos el estado 'input' para el próximo mensaje
    scroll.current.scrollIntoView({ behavior: 'smooth' }); // Hacemos scroll hacia abajo al enviar el mensaje
  };

  // Retornamos el JSX del formulario de envío de mensajes
  return (
    <div className="Formulario">
     <form className="send-message-form" onSubmit={handleSubmit}> {/* Asignamos la función 'handleSubmit' al evento 'submit' del formulario */}
      <input
        type="text"
        placeholder="Escribe tu mensaje aqui!!!"
        value={input}
        onChange={handleInputChange} // Asignamos la función 'handleInputChange' al evento 'onChange' del input
      />
      <button type="submit">Enviar <i className="fa-solid fa-paper-plane"></i></button>
    </form>
    </div>
    
  );
}

export default SendMessage;
