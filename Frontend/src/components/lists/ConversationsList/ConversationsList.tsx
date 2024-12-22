// FILE: ConversationsList.tsx
import React from "react";
import "./ConversationsList.css"; // Ensure appropriate styling
import { ChatRoomDto } from "../../../dto/ChatRoomDto";
import { GetMessageDto } from "../../../dto/MessageDto";


interface ConversationsListProps {
  conversationData: ChatRoomDto[];
  onSelectConversation: (conversation: ChatRoomDto) => void;
  selectedConversationId?: string;
}

const ConversationsList: React.FC<ConversationsListProps> = ({
  conversationData,
  onSelectConversation,
  selectedConversationId,
}) => {
  
  // Helper function to derive conversation name from members
  const getConversationName = (conversation: ChatRoomDto): string => {
    return conversation.name
  };

  return (
    <div className="conversations-list-container">
      {conversationData.map((conversation) => (
        <div
          key={conversation.id}
          className={`conversation-item${
            conversation.id === selectedConversationId ? " active" : ""
          }`}
          onClick={() => onSelectConversation(conversation)}
        >
          <h3>{getConversationName(conversation)}</h3>
        </div>
      ))}
    </div>
  );
};

export default ConversationsList;
