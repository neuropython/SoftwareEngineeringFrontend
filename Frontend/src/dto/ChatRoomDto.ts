import { GetMemberDto } from "./MemberDto";

export class ChatRoomDto {
  id: string = "";
  name: string = "";
  members: GetMemberDto[] = [];
}
