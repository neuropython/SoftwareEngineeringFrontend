import ConversationsList from "../components/lists/ConversationsList/ConversationsList";
import MessagesList from "../components/lists/MessagesList/MessagesList";
import InputBar from "../components/bars/InputBar/InputBar";
import { useState } from "react";
import { conversationData, messageData, userLoggedId } from "../mock_data";
import "../styles/ChatPage.css";

const ChatPage: React.FC = () => {
  return (
    <div className="chat-page">
      <div className="conversations-list">
        <ConversationsList conversationData={conversationData} />
      </div>
      <div className="chat-section">
        <div className="messages-list">
          <MessagesList messageData={messageData} userLoggedId={userLoggedId} />
        </div>
        <div className="input-bar">
          <InputBar />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
