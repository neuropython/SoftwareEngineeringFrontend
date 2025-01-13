import ENDPOINTS from "../endpoints";

const getUserById = async (userId: string) => {
  try {
    const response = await fetch(`${ENDPOINTS.USERS.USERBYID}${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

export default getUserById;