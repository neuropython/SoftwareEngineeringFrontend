import "./App.css";
import ChatPromptCard from "./components/cards/ChatPromptCard/ChatPromptCard";
import MessageCard from "./components/cards/MessageCard/MessageCard";
import TextPromptCard from "./components/cards/TextPromptCard/TextPromptCard";

function App() {
  return (
    <>
      <MessageCard
        id="1"
        content="Hello, World!"
        embeddedMedia={[]}
        chatRoomId={"1"}
        sentById={"1"}
        sentAt={new Date().toISOString()}
        seenById={[]}
      />
      <TextPromptCard />
      <ChatPromptCard />
    </>
  );
}

export default App;
