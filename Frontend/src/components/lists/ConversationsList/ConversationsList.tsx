import React from "react";
import { FixedSizeList as List } from "react-window";
import ConversationCard from "../../cards/ConversationCard/ConversationCard";

interface ConversationCardProps {
  conversationName: string;
  conversationImage: string;
  conversationWhoMessaged: string;
  conversationLastMessage: string;
  conversationLastMessageTime: string;
}

interface ConversationsCardProps {
  conversationData: ConversationCardProps[];
}

export default function ConversationsList({
  conversationData,
}: ConversationsCardProps) {
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    const conversationItem = conversationData[index];
    return (
      <div style={style}>
        <ConversationCard
          conversationName={conversationItem.conversationName}
          conversationImage={conversationItem.conversationImage}
          conversationWhoMessaged={conversationItem.conversationWhoMessaged}
          conversationLastMessage={conversationItem.conversationLastMessage}
          conversationLastMessageTime={
            conversationItem.conversationLastMessageTime
          }
        />
      </div>
    );
  };

  return (
    <List
      height={900}
      itemCount={conversationData.length}
      itemSize={100}
      width={"100%"}
    >
      {Row}
    </List>
  );
}
