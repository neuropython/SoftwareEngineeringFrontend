export class CreateUserDto {
  id: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  profilePictureId: string = "";
}

export class GetUserDto {
  id: string = "";
  username: string = "";
  email: string = "";
  profilePictureId: string = "";
}
