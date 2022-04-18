import profileReducer from './profile/reducer';
import { createStore, combineReducers } from 'redux';
import chatsReducer from './chats/reducer';
import messagesReducer from './messages/reducer';

const redusers = combineReducers ({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
});

const  store = createStore(
    redusers,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );

export default store;