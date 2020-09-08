import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './users/reducer';
import filmReducer from './films/reducer';

const rootReducer = combineReducers({
  users: userReducer,
  films: filmReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => store.getState())

export default store;