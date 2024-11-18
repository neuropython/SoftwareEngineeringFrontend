import ConversationsList from "../components/lists/ConversationsList/ConversationsList";
import MessagesList from "../components/lists/MessagesList/MessagesList";
import { GetMessageDto } from "../dto/MessageDto";
import InputBar from "../components/bars/InputBar/InputBar";
import { useState } from 'react'

export const conversationData = [
    {
      conversationName: "group name",
      conversationImage: "https://example.com/avatar1.png", 
      conversationWhoMessaged: "nickname",
      conversationLastMessage: "this is the last messageeeeeeeeeeeeeeeeeeeeeeeee",
      conversationLastMessageTime: "time",
    },
    {
      conversationName: "group name",
      conversationImage: "https://example.com/avatar2.png",
      conversationWhoMessaged: "nickname",
      conversationLastMessage: "this is the last messageeeeeeeeeeeeeeeeeeeeeeeee",
      conversationLastMessageTime: "time",
    },
    {
      conversationName: "group name",
      conversationImage: "https://example.com/avatar3.png",
      conversationWhoMessaged: "nickname",
      conversationLastMessage: "this is the last messageeeeeeeeeeeeeeeeeeeeeeeee",
      conversationLastMessageTime: "time",
    },
  ];
  export const userLoggedId = "1";
  export const messageData: GetMessageDto[] = [
    {
      id: "1",
      content: "Hello, World!",
      embeddedMedia: [],
      chatRoomId: "1",
      sentById: "1",
      sentAt: new Date().toISOString(),
      seenById: [],
    },
    {
      id: "2",
      content: "Hello, World!",
      embeddedMedia: [],
      chatRoomId: "1",
      sentById: "2",
      sentAt: new Date().toISOString(),
      seenById: [],
    },
    {
      id: "3",
      content: "Hello, World!",
      embeddedMedia: [],
      chatRoomId: "1",
      sentById: "1",
      sentAt: new Date().toISOString(),
      seenById: [],
    },
  ];

const ChatPage: React.FC = () => {
    const [count, setCount] = useState(0)

    return (
    <div>
    <InputBar />
      <ConversationsList conversationData={conversationData} />
      <MessagesList messageData={messageData} userLoggedId={userLoggedId} /> 
    </div>
    )
}

export default ChatPage;