import ENDPOINTS from "../endpoints";

const room = async (roomId: string) => {
    const response = await fetch(ENDPOINTS.CHATS.ROOM + '/' +roomId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      });
      return response;
  }
  
  export default room;