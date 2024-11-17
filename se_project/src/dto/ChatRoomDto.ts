import { GetMessageDto } from "./MessageDto";
import { GetMemberDto } from "./MemberDto";

export class ChatRoomDto {
  id: string = "";
  messages: GetMessageDto[] = [];
  members: GetMemberDto[] = [];
}
