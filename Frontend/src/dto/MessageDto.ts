import { EmbeddedMediaDto } from "./EmbeddedMediaDto";

export class CreateMessageDto {
  id: string = "";
  content: string = "";
  embeddedMedia: EmbeddedMediaDto[] = [];
  chatRoomId: string = "";
  sentById: string = "";
  sentAt: string = ""; // timestamp
  seenBy: string[] = [];
}


export class GetMessageDto {
  id: string = "";
  content: string = "";
  embeddedMedia: EmbeddedMediaDto[] = [];
  chatRoomId: string = "";
  sentBy: string = "";
  sentAt: string = ""; // timestamp
  seenBy: string[] = [];

  constructor(
    id: string = "",
    content: string = "",
    embeddedMedia: EmbeddedMediaDto[] = [],
    chatRoomId: string = "",
    sentById: string = "",
    sentAt: string = "",
    seenById: string[] = []
  ) {
    this.id = id;
    this.content = content;
    this.embeddedMedia = embeddedMedia;
    this.chatRoomId = chatRoomId;
    this.sentBy = sentById;
    this.sentAt = sentAt;
    this.seenBy = seenById;
  }
}


export class SendMessageDto {
  type: string = "TextMessage";
  data: {
    content: string;
  };

  constructor(type: string, content: string) {
    this.type = type;
    this.data = { content: content };
  }
}