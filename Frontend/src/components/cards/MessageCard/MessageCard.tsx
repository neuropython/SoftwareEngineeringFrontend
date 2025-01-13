import { GetMessageDto } from "../../../dto/MessageDto";
import "./MessageCard.css";
import { useEffect, useState } from "react";
import getUserById from "../../../api/user/getUserById";

interface MessageCardProps {
  getMessageDto: GetMessageDto;
  isSentByUser: boolean;
  socket: any;
}

export default function MessageCard({
  getMessageDto,
  socket,
  isSentByUser
}: MessageCardProps) {
  const [nicknames, setNicknames] = useState<string[]>([]);
  const [isDeleted, setIsDeleted] = useState(false);

  
  useEffect(() => {
    const fetchNicknames = async () => {
      if (Array.isArray(getMessageDto.seenById)) {
        try {
          const names = await Promise.all(
            getMessageDto.seenById.map(async (id: string) => {
              const response = await getUserById(id);
              if (!response.ok) {
                throw new Error(`Failed to fetch user with id: ${id}`);
              }
              const data = await response.json();
              if (!data.nickname) {
                throw new Error(`Nickname not found for user with id: ${id}`);
              }
              return data.nickname;
            })
          );
          setNicknames(names);
        } catch (error) {
          console.error("Error fetching nicknames:", error);
        }
      }
    };
    fetchNicknames();
  }, [getMessageDto.seenById]);

  const formattedDate = new Date(getMessageDto.sentAt).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const DeleteMessage = () => {
    const JsonDeleteMessage = `{"type":"DeleteMessage","data":{"messageId":"${getMessageDto.id}"}}`;
     if (socket) {
      console.log(socket);
      console.log('Delete message:', getMessageDto.id);
      socket.current.send(JsonDeleteMessage);
      setIsDeleted(true);

    }
  }

  return (
    <>
    <div className = {`message-card-container ${isSentByUser ? "sent" : "received"}`}>
      <div className="message-info">
        <span>{formattedDate}</span>
      </div>
{isSentByUser ? (
  <button className={`message-card ${isDeleted ? "deleted" : ""}`} onClick={DeleteMessage}>
    <h3>{getMessageDto.content}</h3>
  </button>
) : (
  <div className={`message-card mirrored`}>
    <h3>{getMessageDto.content}</h3>
  </div>
)}
</div>
      <div className="nicknames">
        {nicknames.map((nickname, index) => (
          <span key={index}>{nickname}</span>
        ))}
      </div>
    </>
  );
}