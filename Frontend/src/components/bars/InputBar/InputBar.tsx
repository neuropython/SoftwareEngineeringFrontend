import AIPromptCard from "../../cards/AIPromptCard/AIPromptCard";
import TextPromptCard from "../../cards/TextPromptCard/TextPromptCard";
import "./InputBar.css";

export default function InputBar({
  onSendMessage,
  chatRoomMessages,
  chatRoomId,
}: {
  onSendMessage: (content: string) => void;
  chatRoomMessages: any[];
  chatRoomId: string;
}): JSX.Element {
  return (
    <div className="input-bar">
      <AIPromptCard chatRoomMessages={chatRoomMessages} chatRoomId={chatRoomId}/>
      <TextPromptCard onSendMessage={onSendMessage} />
    </div>
  );
}
