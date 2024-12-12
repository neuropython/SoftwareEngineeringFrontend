// FILE: ChatRoom.tsx
import React, { useState, useEffect, useRef } from "react";
import { ChatRoomDto } from "../../dto/ChatRoomDto";
import { GetMessageDto } from "../../dto/MessageDto";
import MessagesList from "../lists/MessagesList/MessagesList";
import TextPromptCard from "../cards/TextPromptCard/TextPromptCard";
import { Input } from "@mui/material";
import InputBar from "../bars/InputBar/InputBar";

interface ChatRoomProps {
  userLoggedId: string;
  conversation: ChatRoomDto;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ userLoggedId, conversation }) => {
  const [messageData, setMessageData] = useState<GetMessageDto[]>([]);

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

    fetchMessages(conversation.id);

    // Initialize WebSocket connection specific to the conversation
    // Replace with your actual WebSocket URL and maybe conversation ID
    //socket.current = io(`ws://your-websocket-url/${conversation.id}`);
    // Listen for incoming messages
    // socket.current.on("newMessage", (message: GetMessageDto) => {
    //   if (message.chatRoomId === conversation.id) {
    //     setMessageData((prevMessages) => [...prevMessages, message]);
    //   }
    // });
    // Optionally, fetch initial messages for the selected conversation
    // fetchMessages(conversation.id).then(initialMessages => {
    //   setMessageData(initialMessages);
    // });
    // Cleanup on unmount or when conversation changes
    // return () => {
    //   if (socket.current) {
    //     socket.current.disconnect();
    //   }
    // };
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
