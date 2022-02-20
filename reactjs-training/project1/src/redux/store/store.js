import { createStore } from 'redux';
// import reducer from '../reducer/reducer';
import counterReducer from '../reducer/counterReducer';

const store = createStore(counterReducer);

export default store;