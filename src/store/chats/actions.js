export const ADD_CHAT = 'CHATS::ADD_CHAT';
// export const DEL_CHAT = 'CHATS::DELL_CHAT';

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload: name
});