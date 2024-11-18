import AIPromptCard from "./components/cards/AIPromptCard/AIPromptCard";
import MessageCard from "./components/cards/MessageCard/MessageCard";
import TextPromptCard from "./components/cards/TextPromptCard/TextPromptCard";
import ConversationItem from "./components/cards/ConversationCard/ConversationCard";
import ConversationsList from "./components/lists/ConversationsList/ConversationsList";
import MessagesList from "./components/lists/MessagesList/MessagesList";
import { GetMessageDto } from "./dto/MessageDto";
import InputBar from "./components/bars/InputBar/InputBar";
import { useState } from 'react'
import './styles/global.css'
import  Navbar  from './components/Navbar'
import  Footer  from './components/Footer'
import  ChatFooter  from './components/ChatFooter'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

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


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        </Routes>        
        {/* <ChatFooter /> */}
        {/* <InputBar />
      <ConversationsList conversationData={conversationData} />
      <MessagesList messageData={messageData} userLoggedId={userLoggedId} /> */}
        < Footer />
    </div>
  )
}

export default App