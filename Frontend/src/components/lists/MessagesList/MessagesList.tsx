// FILE: MessagesList.tsx
import React, { useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { GetMessageDto } from "../../../dto/MessageDto";
import MessageCard from "../../cards/MessageCard/MessageCard";
import AutoSizer from "react-virtualized-auto-sizer";

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
      const messageItem = messageData[index];
      const isSentByUser = messageItem.sentById === userLoggedId;

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
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          itemCount={messageData.length}
          itemSize={80}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default MessagesList;
