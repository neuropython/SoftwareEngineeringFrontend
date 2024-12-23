import ENDPOINTS from "../endpoints";

const AddUserToRoom = async (userToAddId: string, roomId: string) => {
    
    const response = await fetch(ENDPOINTS.CHATS.ROOM + roomId + '/users/add?userId=' + userToAddId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }
      }).then((response: Response) => response.json());
      return response;
  }
  
  export default AddUserToRoom;