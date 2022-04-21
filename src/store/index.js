import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile/reducer';
import chatsReducer from './chats/reducer';
import messagesReducer from './messages/reducer';
import mySaga from './sagas';
import createSagaMiddleware from 'redux-saga';



const sagaMiddleware = createSagaMiddleware();

const redusers = combineReducers ({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
});

const store = createStore(redusers, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(mySaga);