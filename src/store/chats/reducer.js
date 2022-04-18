import { ADD_CHAT } from './actions';

const initialState = {
    chatList :[]
};

// const chatList = [
//     {
//         id: 'string = id + chat.length',
//         name: 'string'
//     }
// ]


const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
         return {
             ...state,
             chatList: [
                 ...state.chatList,
                 {
                     id: `id${state.chatList.length}`,
                     name: action.payload
                 }
             ]
         };
         default:
             return state;
    }
};

export default chatsReducer;