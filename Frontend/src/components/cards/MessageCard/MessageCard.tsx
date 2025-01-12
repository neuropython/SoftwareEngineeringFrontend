import { GetMessageDto } from "../../../dto/MessageDto";
import "./MessageCard.css";
import { useEffect, useState } from "react";
import getUserById from "../../../api/user/getUserById";

interface MessageCardProps {
  getMessageDto: GetMessageDto;
  isSentByUser: boolean;
}

export default function MessageCard({
  getMessageDto,
  isSentByUser
}: MessageCardProps) {
  const [nicknames, setNicknames] = useState<string[]>([]);
  
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

  return (
    <>
      <div className="message-info">
        <span>{formattedDate}</span>
      </div>
      <div className={`message-card ${isSentByUser ? "" : "mirrored"}`}>
        <h3>{getMessageDto.content}</h3>
      </div>
      <div className="nicknames">
        {nicknames.map((nickname, index) => (
          <span key={index}>{nickname}</span>
        ))}
      </div>
    </>
  );
}