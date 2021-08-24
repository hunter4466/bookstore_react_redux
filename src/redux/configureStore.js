import { createStore } from 'redux';

const defaultState = [];

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const authReducer = (state = defaultState, action) => {
  const array = [];
  switch (action.type) {
    case ADD_BOOK:
      state.push({
        index: state.length + 1,
        category: action.category,
        book: action.book,
        author: action.author,
      });
      return state;
    case REMOVE_BOOK:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].index !== action.index) {
          const tempObj = state[i];
          tempObj.index = i + 1;
          array.push(tempObj);
        }
      }
      return array;

    default:
      return state;
  }
};

const appendBook = (c, b, a) => ({
  type: ADD_BOOK,
  category: c,
  book: b,
  author: a,
});

const store = createStore(authReducer);
const AddBook = (c, b, a) => {
  store.dispatch(appendBook(c, b, a));
};
const RemoveBook = (i) => {
  store.dispatch({ type: REMOVE_BOOK, index: i });
};
export { store, AddBook, RemoveBook };
