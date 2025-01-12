// FILE: ChatPage.tsx
import React, { useState, useEffect} from "react";
import ConversationsList from "../components/lists/ConversationsList/ConversationsList";
import "../styles/ChatPage.css";
import { ChatRoomDto } from "../dto/ChatRoomDto";
import ChatRoom from "../components/rooms/ChatRoom";
import rooms from "../api/chat/rooms";
import CrateNewRoomComponent  from "../components/buttons/CreateNewRoom";
import { Input } from '@mui/material';
import me from "../api/user/me";


const ChatPage = () => {
  const [userLoggedId, setUserLoggedId] = useState<string | null>(null);
  const [chatRooms, setChatRooms] = useState<ChatRoomDto[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<ChatRoomDto | null>(null);
  const [ChatName, setChatName] = useState("");

  console.log("Logged in user ID:", userLoggedId);

  const handleSelectConversation = (conversation: ChatRoomDto) => {
    setSelectedConversation(conversation);
  };

  const getChatRoomData = async () => {
    rooms().then((response: Response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log("Chat room data:", data);
          const chatRooms: ChatRoomDto[] = data;
          setChatRooms(chatRooms);
        });
      } else {
        console.error("Failed to fetch chat rooms:", response);
        return [];
      }
    });
  };

  useEffect(() => {
    const fetchUserId = async () => {
      const response = await me();
      if (response.ok) {
        const data = await response.json();
        setUserLoggedId(data.id);
        console.log("Logged in user ID:", data.id);
      } else {
        console.error("Failed to fetch user data:", response);
      }
    };

    fetchUserId();
    getChatRoomData();
  }, []);

  return (
    <div className="chat-page">
      <div className="conversations-list">
        <ConversationsList
          conversationData={chatRooms}
          onSelectConversation={handleSelectConversation}
          selectedConversationId={selectedConversation?.id}
        />
        <Input
        className="InputChatRoom"
        type="text"
        placeholder="GroupName"
        value={ChatName}
        onChange={(e) => setChatName(e.target.value)}
        />
        <CrateNewRoomComponent
        chatRoom={ChatName}
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
            Please select a conversation
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;