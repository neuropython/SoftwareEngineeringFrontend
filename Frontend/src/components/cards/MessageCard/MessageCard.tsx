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
    console.log("useEffect running"); // Debugging line
    console.log("getMessageDto:", getMessageDto); // Debugging line
    const fetchNicknames = async () => {
      const seenById = getMessageDto.seenBy || []; // Add default value
      if (Array.isArray(seenById) && seenById.length > 0) {
        console.log("seenById:", seenById); // Debugging line
        try {
          const names = await Promise.all(
            seenById.map(async (id: string) => {
              const response = await getUserById(id);
              if (!response.ok) {
                throw new Error(`Failed to fetch user with id: ${id}`);
              }
              const data = await response.json();
              console.log("API response data:", data); // Debugging line
              return data.username || `User ${id}`; // Use username as fallback value
            })
          );
          setNicknames(names);
          console.log("Nicknames:", names); // Debugging line
        } catch (error) {
          console.error("Error fetching nicknames:", error);
        }
      } else {
        console.log("seenById is not an array or is empty"); // Debugging line
      }
    };
    fetchNicknames();
  }, [getMessageDto]);

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
  };

  return (
    <>
      <div className={`message-card-container ${isSentByUser ? "sent" : "received"}`}>
        <div className={`message-card-wrapper ${isSentByUser ? "sent" : "received"}`}>
          {isSentByUser ? (
            <button
              className={`message-card ${isDeleted ? "deleted" : ""}`}
              onClick={DeleteMessage}
            >
              <h3>{getMessageDto.content}</h3>
            </button>
          ) : (
            <div className="message-card mirrored">
              <h3>{getMessageDto.content}</h3>
            </div>
          )}
          <div className="message-info">
            <span>{formattedDate}</span>
            {nicknames.length > 0 && (
            <div className="nicknames">
              <span>{nicknames.join(", ")}</span>
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
}