import ENDPOINTS from "../endpoints";

const registerClient = async (username: string, password: string, email: string) => {
    const response = await fetch(ENDPOINTS.AUTH.REGISTER, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
    });
    return response;
}

export default registerClient;