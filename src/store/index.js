import profileReducer from './profile/reducer';
import { createStore } from 'redux';

const  store = createStore(profileReducer);

export default store;