import { addMessage, ADD_MESSAGE } from "../store/messages/actions";
import { AUTHOR } from '../constants/commom';

const middleware = (store) => (next) => (action) => {
    if(action.type === ADD_MESSAGE && action.payload.message.author !== AUTHOR.bot){
        const newMessage = {text: 'Привет, я из миддлвары', author: AUTHOR.bot};
        setTimeout(() => store.dispatch(addMessage(action.payload.chatId, newMessage)), 1000);
    };

    
    return next(action);
};

export default middleware;