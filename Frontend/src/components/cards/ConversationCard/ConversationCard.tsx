import "./ConversationCard.css";

interface ConversationCardProps {
  conversationName: string;
  conversationImage: string;
  conversationWhoMessaged: string;
  conversationLastMessage: string;
  conversationLastMessageTime: string;
}

export default function ConversationCard(props: ConversationCardProps) {
  return (
    <div className="conversation-item">
      <div className="conversation-item__avatar">
        <img src={props.conversationImage} />
      </div>
      <div className="conversation-item__content">
        <div className="conversation-item__content__name">
          {props.conversationName}
        </div>
        <div className="conversation-item__content__last-message">
          {props.conversationWhoMessaged}: {props.conversationLastMessage}
          <span>{props.conversationLastMessageTime}</span>
        </div>
      </div>
    </div>
  );
}
