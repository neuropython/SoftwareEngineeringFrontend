import ENDPOINTS from "../endpoints";

const rooms = async () => {
    const response = await fetch(ENDPOINTS.CHATS.ROOM, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      });
      return response;
  }
  
  export default rooms;