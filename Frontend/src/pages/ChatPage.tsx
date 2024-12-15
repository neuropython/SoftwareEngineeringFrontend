// FILE: ChatPage.tsx
import React, { useState } from "react";
import ConversationsList from "../components/lists/ConversationsList/ConversationsList";
import { conversationData } from "../mock_data"; // Ensure this data is appropriate
import "../styles/ChatPage.css";
import { ChatRoomDto } from "../dto/ChatRoomDto";
import ChatRoom from "../components/rooms/ChatRoom";

interface ChatPageProps {
  // Define if needed
}

const ChatPage: React.FC<ChatPageProps> = () => {
  const userLoggedId = localStorage.getItem("userId"); // Replace with actual logged-in user ID logic
  const [selectedConversation, setSelectedConversation] =
    useState<ChatRoomDto | null>(null);

  const handleSelectConversation = (conversation: ChatRoomDto) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className="chat-page">
      <div className="conversations-list">
        <ConversationsList
          conversationData={conversationData}
          onSelectConversation={handleSelectConversation}
          selectedConversationId={selectedConversation?.id}
        />
      </div>
      <div className="chat-section">
        {selectedConversation ? (
          <ChatRoom
            userLoggedId={userLoggedId || ""}
            conversation={selectedConversation}
          />
        ) : (
          <div className="no-conversation-selected">
            <h2>Select a conversation to start chatting</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
