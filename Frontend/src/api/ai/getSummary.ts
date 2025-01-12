import ENDPOINTS from "../endpoints";

const getMessageSummary = async (roomId: string, prompt:string[]) => {
    const response = await fetch(ENDPOINTS.AI.SUMMARY + roomId + '/messages/summary', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(prompt),
      });
      return response;
  }
  
  export default getMessageSummary;