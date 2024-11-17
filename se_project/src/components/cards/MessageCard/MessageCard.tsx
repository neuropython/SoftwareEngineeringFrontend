import { GetMessageDto } from "../../../dto/MessageDto";
import "./MessageCard.css";

export default function MessageCard({ content }: GetMessageDto) {
  return (
    <div className="message-card">
      <h3>{content}</h3>
    </div>
  );
}
