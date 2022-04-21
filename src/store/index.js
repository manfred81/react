import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import profileReducer from './profile/reducer';
import chatsReducer from './chats/reducer';
import messagesReducer from './messages/reducer';

// import mySaga from './sagas';
// import createSagaMiddleware from 'redux-saga';



// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'rot',
    storage
};

const redusers = combineReducers ({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
});

const persistedReducer = persistReducer(persistConfig, redusers); 

export const store = createStore(
    persistedReducer, 
    composeEnhancers(applyMiddleware(thunk))
    );

const persistor = persistStore(store);

export default persistor;

// sagaMiddleware.run(mySaga);