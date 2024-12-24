import ENDPOINTS from "../endpoints";

const deleteUserFromRoom = async (userToAddId: string, roomId: string) => {
    
    const response = await fetch(ENDPOINTS.CHATS.ROOM + '/'+ roomId + '/users/' + userToAddId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }
      }).then((response: Response) => response.json());
      return response;
  }
  
  export default deleteUserFromRoom;