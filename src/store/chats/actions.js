export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const CHATS_UPDATE = 'CHATS::CHATS_UPDATE';
// export const DEL_CHAT = 'CHATS::DELL_CHAT';

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload: name
});

export const chatListUpdate = (chats) => ({
    type: CHATS_UPDATE,
    chats

});