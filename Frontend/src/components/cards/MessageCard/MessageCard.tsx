import { GetMessageDto } from "../../../dto/MessageDto";
import "./MessageCard.css";

interface MessageCardProps {
  getMessageDto: GetMessageDto;
  className?: string;
}

export default function MessageCard({
  getMessageDto,
  className,
}: MessageCardProps) {
  return (
    <div className={`message-card ${className}`}>
      <h3>{getMessageDto.content}</h3>
    </div>
    
  );
}
