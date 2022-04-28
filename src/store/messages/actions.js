import { AUTHOR } from '../../constants/commom';



export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_WITH_SAGA = 'MESSAGES::ADD_MESSAGE_WITH_SAGA';
export const UPDATE_MESSAGES = 'MESSAGES::UPDATE_MESSAGES';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message }
});

export const addMessageWithSaga = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    payload: { chatId, message }
});


export const addMessageWithThunk = 
(chatId, message) => (dispach, getState) => {
    dispach(addMessage(chatId, message));

    if (message.author !== AUTHOR.bot) {
        const botMessage = { text: 'Привет друг, как дела, я из танка', author: AUTHOR.bot};
        setTimeout (() => dispach(addMessage(chatId, botMessage)),1500 );

    }
};

export const updateMessages = (chatId, messages) => ({
   type: UPDATE_MESSAGES,
   chatId,
   messages
});