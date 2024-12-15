import ENDPOINTS from './../endpoints';

const loginClient = async (username: string, password: string) => {
    const response = await fetch(ENDPOINTS.AUTH.LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    }
    );
    return response;
}

export default loginClient;
        