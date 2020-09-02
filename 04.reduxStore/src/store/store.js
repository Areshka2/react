import { combineReducers, createStore } from 'redux';
import userReducer from './users/reducer';
import filmReducer from './films/reducer';

const rootReducer = combineReducers({
  users: userReducer,
  films: filmReducer,
})

const store = createStore(rootReducer);

store.subscribe(() => store.getState())

export default store;