// FILE: ChatRoom.tsx
import React, { useState, useEffect, useRef } from "react";
import { ChatRoomDto } from "../../dto/ChatRoomDto";
import { GetMessageDto } from "../../dto/MessageDto";
import { SendMessageDto } from "../../dto/MessageDto";
import MessagesList from "../lists/MessagesList/MessagesList";
import InputBar from "../bars/InputBar/InputBar";
import MessageListBar from "../bars/MessageListBar/MessageListBar"
import UserList from "../lists/UserList/UserList";

interface ChatRoomProps {
  userLoggedId: string;
  conversation: ChatRoomDto;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ userLoggedId, conversation }) => {
  const [messageData, setMessageData] = useState<GetMessageDto[]>([]);
  const authToken = localStorage.getItem("accessToken");
  const socket = useRef<WebSocket | null>(null);
  
  useEffect( () => {
    const connectToRoom = async (chatRoomId: string) => {
      if (!authToken) {
        console.error("Auth token is null or undefined");
        return;
      }

      const url = `ws://localhost:8080/connect/room/${chatRoomId}?token=${authToken}`;      
      console.log('Attempting to connect to WebSocket at:', url);
      socket.current = new WebSocket(url);
      

      socket.current.onopen = async () => {
        console.log('WebSocket connection opened');
        console.log('Connecting to room:', chatRoomId);
        console.log('Socket:', socket.current);
      };
      console.log('Socket:', socket.current);
      

      socket.current.onmessage = (event) => {
         try {
          const data = event.data;
          const dataObj = JSON.parse(data);
          if (dataObj["type"] === "TextMessage") {
            const message: GetMessageDto = dataObj["data"];
            setMessageData((prevMessages) => [...prevMessages, message]);
            const JsonSeenMessage = `{"type":"SeenMessage","data":{"messageId":"${message.id}"}}`;
            if (socket.current) {
              console.log('Sending seen message:', JsonSeenMessage);
              socket.current.send(JsonSeenMessage);
            }
        }  

        } catch (error) {
          console.error('Error parsing message:', error);
        } 
      };

      socket.current.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      socket.current.onclose = () => {
        console.log('Disconnecting from room:', chatRoomId);
        console.log('WebSocket connection closed');
      };
    };
    connectToRoom(conversation.id);

    return () => {
      if (socket.current) {
        socket.current.close();
      }
      console.log('Closing WebSocket connection');
      setMessageData([]);

    };
  }, [conversation.id, authToken]);

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
      style={{ display: "flex", flexDirection: "column", height: "100%", overflowX: "hidden"}}
    >
      <div style={{ flex: 1, overflow: "hidden"}}>
        <MessageListBar userId={userLoggedId} roomId={conversation.id}/>
        <MessagesList userLoggedId={userLoggedId} messageData={messageData} socket={socket} />
      </div>
      <div>
      <div className = "inputBar" style={{ padding: "10px" , width: "100%", alignItems: "center", justifyContent: "center", display: "flex"}}>
        <InputBar onSendMessage={addMessage} chatRoomMessages={messageData} chatRoomId={conversation.id}/>
        </div>
        <UserList roomId={conversation.id} />

      </div>
    </div>
  );
};

export default ChatRoom;
