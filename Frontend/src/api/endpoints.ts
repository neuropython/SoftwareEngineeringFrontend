const BASE = 'http://localhost:8080';

const ENDPOINTS = {
    AUTH : {
        LOGIN: BASE + `/auth/login`,
        REGISTER: BASE + `/auth/register`,
    },
    USERS: {
        ME: BASE + `/users/me`,
        USERBYID: BASE + `/users/`,
    },
    CHATS: {
        ROOM: BASE + `/chats/room`,
        MEDIA: BASE + `/chats/media`,
        MSG_SUMMARY: BASE + `/chats/chat`,
    },
    AI: {
        SUMMARY: BASE + `/summarize_chat`,
    }
};

export default ENDPOINTS;