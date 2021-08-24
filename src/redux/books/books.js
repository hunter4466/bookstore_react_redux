const ADD_BOOK = 'redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/REMOVE_BOOK';

const initialState = [];

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (i) => ({
  type: REMOVE_BOOK,
  id: i,
});

const booksReducer = (state = initialState, action) => {
  const array = [];
  state.forEach((elem) => {
    array.push(elem);
  });
  switch (action.type) {
    case ADD_BOOK:
      array.push({
        id: state.length + 1,
        data: action.payload,
      });
      return array;
    case REMOVE_BOOK:
      return state.filter((book) => action.id !== book.id);
    default:
      return state;
  }
};

export { addBook, removeBook, booksReducer };
