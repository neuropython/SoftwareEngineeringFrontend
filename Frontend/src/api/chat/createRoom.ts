import ENDPOINTS from "../endpoints";

const createRoom = async (roomName: string) => {
    console.log(`{name: "${roomName}"}`)
    
    const response = await fetch(ENDPOINTS.CHATS.ROOM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: `{"name": "${roomName}"}`,
      }).then((response: Response) => response.json());
      return response;
  }
  
  export default createRoom;