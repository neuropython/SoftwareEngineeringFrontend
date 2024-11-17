export class CreateMediaFileDto {
  id: string = "";
  fileId: string = "";
  type: string = "";
  roomId: string[] = [];
  createdAt: string = ""; // timestamp
  createdById: string = "";
  size: number = 0;
}

export class GetMediaFileDto {
  id: string = "";
  fileId: string = "";
  type: string = "";
  roomIds: string[] = [];
  createdAt: string = ""; // timestamp
  createdById: string = "";
  size: number = 0;
}
