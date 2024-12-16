// FILE: MessagesList.tsx
import React, { useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { GetMessageDto } from "../../../dto/MessageDto";
import MessageCard from "../../cards/MessageCard/MessageCard";

interface MessagesListProps {
  userLoggedId: string;
  messageData: GetMessageDto[];
}

const MessagesList: React.FC<MessagesListProps> = ({
  userLoggedId,
  messageData,
}) => {
  // Row component for react-window
  const Row = useCallback(
    ({ index, style }: { index: number; style: React.CSSProperties }) => {
      const messageItem: GetMessageDto = messageData[index];
      console.log("Message item:", messageItem);
      const isSentByUser = messageItem.sentBy === userLoggedId;

      return (
        <div
          className="message-list-item"
          style={{
            ...style,
            display: "flex",
            justifyContent: isSentByUser ? "flex-end" : "flex-start",
            padding: "5px 10px",
          }}
        >
          <MessageCard
            getMessageDto={messageItem}
            className={isSentByUser ? "" : "mirrored"}
          />
        </div>
      );
    },
    [messageData, userLoggedId]
  );

  return (
    <List
      height={800} // Adjust based on your layout
      itemCount={messageData.length}
      itemSize={80} // Adjust based on your MessageCard height
      width={"100%"}
    >
      {Row}
    </List>
  );
};

export default MessagesList;
