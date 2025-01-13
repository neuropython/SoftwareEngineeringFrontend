// FILE: MessagesList.tsx
import React, { useCallback } from "react";
import { GetMessageDto } from "../../../dto/MessageDto";
import MessageCard from "../../cards/MessageCard/MessageCard";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList } from "react-window";

interface MessagesListProps {
  userLoggedId: string;
  messageData: GetMessageDto[];
  socket: any;
}

const MessagesList: React.FC<MessagesListProps> = ({
  userLoggedId,
  messageData,
  socket,
}) => {

  const getItemSize = (index: number): number => {
    const messageItem: GetMessageDto = messageData[index];
    const numberOfLines = Math.ceil(messageItem.content.length / 50);
    const baseSize = userLoggedId === messageItem.sentBy ? 50 : 75;

    if (numberOfLines === 1) {
        return baseSize;
    }

    return 20 * (numberOfLines - 1) + baseSize;
};
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
            flexDirection: "row",
            justifyContent: isSentByUser ? "flex-end" : "flex-start",
            borderRadius: isSentByUser? "10px 0px 10px 10px" : "0px 10px 10px 10px",
            padding: "5px 10px",
            height: "auto",
          }}
        >
          <MessageCard
            getMessageDto={messageItem}
            isSentByUser={isSentByUser}
            socket={socket}
          />
        </div>
      );
    },
    [messageData, userLoggedId]
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
        <VariableSizeList
          height={height}
          itemCount={messageData.length}
          itemSize={getItemSize}
          width={width - 30}
        >
          {Row}
        </VariableSizeList>
      )}
    </AutoSizer>
  );
};

export default MessagesList;
