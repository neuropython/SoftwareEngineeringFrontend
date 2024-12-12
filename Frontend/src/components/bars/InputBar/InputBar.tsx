import AIPromptCard from "../../cards/AIPromptCard/AIPromptCard";
import TextPromptCard from "../../cards/TextPromptCard/TextPromptCard";
import "./InputBar.css";

export default function InputBar({
  onSendMessage,
}: {
  onSendMessage: (content: string) => void;
}): JSX.Element {
  return (
    <div className="input-bar">
      <AIPromptCard />
      <TextPromptCard onSendMessage={onSendMessage} />
    </div>
  );
}
