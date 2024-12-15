import ENDPOINTS from "../endpoints";

const me = async () => {
  const response = await fetch(ENDPOINTS.USERS.ME, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    });
    return response;
}

export default me;

    