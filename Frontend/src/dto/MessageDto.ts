import { EmbeddedMediaDto } from "./EmbeddedMediaDto";

export class CreateMessageDto {
  id: string = "";
  content: string = "";
  embeddedMedia: EmbeddedMediaDto[] = [];
  chatRoomId: string = "";
  sentById: string = "";
  sentAt: string = ""; // timestamp
  seenById: string[] = [];
}

export class GetMessageDto {
  id: string = "";
  content: string = "";
  embeddedMedia: EmbeddedMediaDto[] = [];
  chatRoomId: string = "";
  sentById: string = "";
  sentAt: string = ""; // timestamp
  seenById: string[] = [];

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
    this.sentById = sentById;
    this.sentAt = sentAt;
    this.seenById = seenById;
  }
}