const BASE = 'http://localhost:8080';

const ENDPOINTS = {
    AUTH : {
        LOGIN: BASE + `/auth/login`,
        REGISTER: BASE + `/auth/register`,
    },
    USERS: {
        ME: BASE + `/users/me`,
    },
    CHATS: {
        ROOM: BASE + `/chats/room`,
        MEDIA: BASE + `/chats/media`,
    }
};

export default ENDPOINTS;