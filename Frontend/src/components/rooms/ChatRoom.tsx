// FILE: ChatRoom.tsx
import React, { useState, useEffect, useRef } from "react";
import { ChatRoomDto } from "../../dto/ChatRoomDto";
import { GetMessageDto } from "../../dto/MessageDto";
import MessagesList from "../lists/MessagesList/MessagesList";
import InputBar from "../bars/InputBar/InputBar";
import io, { Socket } from 'socket.io-client';
import ENDPOINTS from "../../api/endpoints";

interface ChatRoomProps {
  userLoggedId: string;
  conversation: ChatRoomDto;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ userLoggedId, conversation }) => {
  const [messageData, setMessageData] = useState<GetMessageDto[]>([]);
  const socket = useRef<Socket | null>(null);
  const authToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchMessages = async (chatRoomId: string) => {
      try {
        const response = await fetch(`/api/chatrooms/${chatRoomId}/messages`);
        const data: GetMessageDto[] = await response.json();
        setMessageData(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    const connectToRoom = async (chatRoomId: string) => {
      socket.current = io('ws://api/chats/room49cfd0fb-0f7a-444f-81db-ae837b142b08/connect' , {
        extraHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      console.log('Connecting to room:', chatRoomId);
      console.log('Socket:', socket.current);
    
      socket.current.on('connect', () => {
        console.log('WebSocket Client Connected');
      });
    
      socket.current.on('message', (data) => {
        const message: GetMessageDto = JSON.parse(data);
        if (message.chatRoomId === conversation.id) {
          setMessageData((prevMessages) => [...prevMessages, message]);
        }
      });
    
      socket.current.on('error', (error) => {
        console.error('WebSocket error:', error);
      });
    
      socket.current.on('disconnect', () => {
        console.log('WebSocket connection closed');
      });
    };

      
    //fetchMessages(conversation.id);
    connectToRoom(conversation.id);


  }, [conversation.id]);

  // Function to send a new message
  const addMessage = (content: string, mediaFile?: File) => {
    if (mediaFile) {
    } else {
      const newMessage: GetMessageDto = {
        id: `${Date.now()}`, // Unique ID
        sentById: userLoggedId,
        content: content,
        sentAt: new Date().toISOString(),
        chatRoomId: conversation.id,
        seenById: [],
        embeddedMedia: [],
      };
      setMessageData((prevMessages) => [...prevMessages, newMessage]);
    }

    // Emit the message to the server
    // if (socket.current) {
    //   socket.current.emit("sendMessage", newMessage);
    // }
  };

  return (
    <div
      className="chat-room"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div style={{ flex: 1, overflow: "hidden" }}>
        <MessagesList userLoggedId={userLoggedId} messageData={messageData} />
      </div>
      <div style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
        <InputBar onSendMessage={addMessage} chatRoomMessages={messageData} />
      </div>
    </div>
  );
};

export default ChatRoom;
