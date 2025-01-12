import { GetMessageDto } from "../../../dto/MessageDto";
import "./MessageCard.css";

interface MessageCardProps {
  getMessageDto: GetMessageDto;
  className?: string;
  isSentByUser: boolean;
}

export default function MessageCard({
  getMessageDto,
  className,
  isSentByUser
}: MessageCardProps) {
  if (isSentByUser) {
    return (   
    <button className={`message-card ${className}`}>
      <h3>{getMessageDto.content}</h3>
    </button>)
    
  }

  return (
    <div className={`message-card ${className}`}>
      <h3>{getMessageDto.content}</h3>
    </div>
    
  );
}
