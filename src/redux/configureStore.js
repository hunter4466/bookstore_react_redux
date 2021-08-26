import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { booksReducer } from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const postBooksMiddleware = () => (next) => (action) => {
  if (action.type === 'redux/books/ADD_BOOK') {
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IdvgzwEjGRTOM81F7XDt/books',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: Object.keys(action.payload)[0],
          title: action.payload[Object.keys(action.payload)[0]][0].title,
          category: action.payload[Object.keys(action.payload)[0]][0].category,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  }
  next(action);
};

const removeBooksMiddleware = () => (next) => (action) => {
  if (action.type === 'redux/books/REMOVE_BOOK') {
    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IdvgzwEjGRTOM81F7XDt/books/${action.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
  }
  next(action);
};

const composedEnhancer = compose(
  applyMiddleware(postBooksMiddleware),
  applyMiddleware(removeBooksMiddleware),
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
