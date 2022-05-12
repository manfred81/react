import { delay, put, takeLatest } from 'redux-saga/effects';
import { addMessage, ADD_MESSAGE_WITH_SAGA } from './messages/actions';
import { AUTHOR } from '../constants/commom';


function* onAddMessageWithSaga (action) {
    yield put(addMessage(action.payload.chatId, action.payload.message));
    if (action.payload.message.author !== AUTHOR.bot) {
        console.log('action', action);
        const botMessage = {text: 'Привет друг, как дела', author: AUTHOR.bot};
        yield delay (2000);
        yield put(addMessage(action.payload.chatId, botMessage));
    }

}

function* mySaga () {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);
}

export default mySaga;