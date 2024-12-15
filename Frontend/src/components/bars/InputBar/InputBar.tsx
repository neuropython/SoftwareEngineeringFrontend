import AIPromptCard from "../../cards/AIPromptCard/AIPromptCard";
import TextPromptCard from "../../cards/TextPromptCard/TextPromptCard";
import "./InputBar.css";

export default function InputBar({
  onSendMessage,
  chatRoomMessages,
}: {
  onSendMessage: (content: string) => void;
  chatRoomMessages: any[];
}): JSX.Element {
  return (
    <div className="input-bar">
      <AIPromptCard chatRoomMessages={chatRoomMessages} />
      <TextPromptCard onSendMessage={onSendMessage} />
    </div>
  );
}
