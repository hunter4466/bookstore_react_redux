import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { booksReducer } from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);
console.log(store.getState());
export default store;
