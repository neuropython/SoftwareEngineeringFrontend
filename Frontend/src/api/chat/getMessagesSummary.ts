import ENDPOINTS from "../endpoints";

const getMessageSummary = async (roomId: string) => {
    const response = await fetch(ENDPOINTS.CHATS.MSG_SUMMARY + '/' + roomId + '/summary', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      });
      return response;
  }
  
  export default getMessageSummary;