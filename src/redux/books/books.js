const ADD_BOOK = 'redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/REMOVE_BOOK';

const initialState = [];

const addBook = (c, t, a) => ({
  type: ADD_BOOK,
  category: c,
  title: t,
  author: a,
});

const removeBook = (i) => ({
  type: REMOVE_BOOK,
  id: i,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      state.push({
        id: state.length + 1,
        category: action.category,
        title: action.title,
        author: action.author,
      });
      return state;
    case REMOVE_BOOK:
      return state.filter((book) => action.id !== book.id);
    default:
      return state;
  }
};

export { addBook, removeBook, booksReducer };
