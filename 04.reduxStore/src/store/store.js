import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './users/reducer';
import { initThunk } from './users/thunks';
import filmReducer from './films/reducer';

const rootReducer = combineReducers({
  users: userReducer,
  films: filmReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => store.getState())

store.dispatch(initThunk())

export default store;