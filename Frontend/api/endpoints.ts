const BASE_URL = 'http://localhost:8080';

const ENDPOINTS = {
    AUTH : {
        LOGIN: `${BASE_URL}/auth/login`,
        REGISTER: `${BASE_URL}/auth/register`,
    },
    USERS: {
        ME: `${BASE_URL}/users/me`,
    },
    CHATS: {
        ROOM: `${BASE_URL}/chats/room`,
        MEDIA: `${BASE_URL}/chats/media`,
    }
};