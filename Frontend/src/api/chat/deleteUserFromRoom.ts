import ENDPOINTS from "../endpoints";

const deleteUserFromRoom = async (userToDeleteId: string, roomId: string) => {
    
    const response = await fetch(ENDPOINTS.CHATS.ROOM + '/'+ roomId + '/users/' + userToDeleteId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }
      }).then((response: Response) => response.json());
      return response;
  }
  
  export default deleteUserFromRoom;