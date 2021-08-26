const ADD_BOOK = 'redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/REMOVE_BOOK';
const UPDATE_BOOK = 'redux/books/UPDATE_BOOK';

const initialState = [];

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (i) => ({
  type: REMOVE_BOOK,
  id: i,
});

const updateBook = (payload) => ({
  type: UPDATE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  const object1 = {};
  const filteredObject1 = {};
  switch (action.type) {
    case ADD_BOOK:
      for (let i = 0; i < Object.keys(state).length; i += 1) {
        object1[Object.keys(state)[i]] = state[Object.keys(state)[i]];
      }
      object1[Object.keys(action.payload)[0]] = action.payload[Object.keys(action.payload)[0]];
      return object1;
    case UPDATE_BOOK:
      return action.payload;
    case REMOVE_BOOK:
      for (let i = 0; i < Object.keys(state).length; i += 1) {
        if (action.id !== Object.keys(state)[i]) {
          filteredObject1[Object.keys(state)[i]] = state[Object.keys(state)[i]];
        }
      }
      return filteredObject1;
    default:
      return state;
  }
};

export {
  addBook, removeBook, booksReducer, updateBook,
};
