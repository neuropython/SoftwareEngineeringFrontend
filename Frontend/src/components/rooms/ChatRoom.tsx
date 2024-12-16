// FILE: ChatRoom.tsx
import React, { useState, useEffect, useRef } from "react";
import { ChatRoomDto } from "../../dto/ChatRoomDto";
import { GetMessageDto } from "../../dto/MessageDto";
import { SendMessageDto } from "../../dto/MessageDto";
import MessagesList from "../lists/MessagesList/MessagesList";
import InputBar from "../bars/InputBar/InputBar";


interface ChatRoomProps {
  userLoggedId: string;
  conversation: ChatRoomDto;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ userLoggedId, conversation }) => {
  const [messageData, setMessageData] = useState<GetMessageDto[]>([]);
  const authToken = localStorage.getItem("accessToken");
  const socket = useRef<WebSocket | null>(null);

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
      if (!authToken) {
        console.error("Auth token is null or undefined");
        return;
      }
      const url = `ws://localhost:8080/connect/room/49cfd0fb-0f7a-444f-81db-ae837b142b08?token=${authToken}`;      
      console.log('Attempting to connect to WebSocket at:', url);
      socket.current = new WebSocket(url);
      

      socket.current.onopen = () => {
        console.log('WebSocket connection opened');
        console.log('Connecting to room:', chatRoomId);
        console.log('Socket:', socket.current);
      };
      

      socket.current.onmessage = (event) => {
        console.log('Message received:', event.data);
        try {
          const data = event.data;
          console.log('Raw data:', data);
          const dataObj = JSON.parse(data);
          const message: GetMessageDto = dataObj["data"];
          console.log('Parsed message:', message);
          setMessageData((prevMessages) => [...prevMessages, message]);
        } catch (error) {
          console.error('Error parsing message:', error);
        } 
      };

      socket.current.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      socket.current.onclose = () => {
        console.log('WebSocket connection closed');
      };
    };
    connectToRoom(conversation.id);

    return () => {
      socket.current?.close();
    };
  }, [conversation.id, authToken]);

  // Function to send a new message
  const addMessage = (content: string, mediaFile?: File) => {
    if (mediaFile) {
    } else {
      const newMessage: SendMessageDto = {
        type: "TextMessage",
        data: {
          content
      }

      };
      console.log('Sending message:', newMessage);
      if (socket.current) {
        socket.current.send(JSON.stringify(newMessage));
      }
    }
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
