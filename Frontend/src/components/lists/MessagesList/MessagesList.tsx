import React from "react";
import { FixedSizeList as List } from "react-window";
import MessageCard from "../../cards/MessageCard/MessageCard";
import { GetMessageDto } from "../../../dto/MessageDto";

export default function MessagesList({
  messageData,
  userLoggedId,
}: {
  messageData: GetMessageDto[];
  userLoggedId: string;
}) {
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const messageItem = messageData[index];
    const isSentByUser = messageItem.sentById === userLoggedId;

    return (
      <div
        style={{
          ...style,
          display: "flex",
          justifyContent: isSentByUser ? "flex-end" : "flex-start",
        }}
      >
        <MessageCard
          getMessageDto={messageItem}
          className={isSentByUser ? "" : "mirrored"}
        />
      </div>
    );
  };

  return (
    <List
      height={600}
      itemCount={messageData.length}
      itemSize={100}
      width={"70%"}
    >
      {Row}
    </List>
  );
}
