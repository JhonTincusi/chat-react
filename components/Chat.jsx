import React from "react";
import ChatLogic from "./ChatLogic";
import Message from "./Message";
import '../styles/Chat.css';
import '../styles/Chat-messages.css';

const Chat = () => {
  return (
    <section className="chat-content">
      <ChatLogic
        render={({ messages, scrollRef }) => (
          <React.Fragment>
            {messages.map((item) => (
              <Message key={item.id} message={item} />
            ))}
            <div ref={scrollRef}></div>
          </React.Fragment>
        )}
      />
    </section>
  );
};

export default Chat;
