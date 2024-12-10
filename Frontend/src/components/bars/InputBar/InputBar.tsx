import AIPromptCard from "../../cards/AIPromptCard/AIPromptCard";
import TextPromptCard from "../../cards/TextPromptCard/TextPromptCard";
import "./InputBar.css";

export default function InputBar() {
  return (
    <div className="input-bar">
      <AIPromptCard />
      <TextPromptCard
        onSendMessage={function (content: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
