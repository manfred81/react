import { addMessage, ADD_MESSAGE } from "../store/messages/actions";
import { AUTHOR } from '../constants/commom';
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import firebaseConfig from "../services/firebaseConfig";
import { chatListUpdate } from "../store/chats/actions";




const middleware = (store) => (next) => (action) => {
    if(action.type === ADD_MESSAGE && action.payload.message.author !== AUTHOR.bot){
        const newMessage = {text: 'Привет, я из миддлвары', author: AUTHOR.bot};
        setTimeout(
            () => store.dispatch(addMessage(action.payload.chatId, newMessage)), 1000
            );
    }

    
    return next(action);
};

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase(firebaseConfig);
    const chatRef = ref(db, '/chats');
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map((item) => ({ 
            id: item,
             name: data[item].name
            }));
            dispatch(chatListUpdate(chatArr));
    });
};

export const addChatWithFB = (name) => async () => {
    const db= getDatabase(firebaseConfig);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, {name: name}).then((res) => {
        console.log('chat added', res);
    });
};

export const deleteChatWithFB = (id) => async () => {
    const db = getDatabase(firebaseConfig);
    const chatRef = ref(db, `/chats/${id}`);
    const messagesRef = ref(db, `/messages/${id}`);
    remove(chatRef).then((res) => {
        console.log('Chat Removed', res);
    })
    remove(messagesRef).then((res) => {
        console.log('Messages deleted', res)
    });

};



export default middleware;