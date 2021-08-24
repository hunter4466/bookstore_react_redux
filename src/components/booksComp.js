import { useDispatch } from 'react-redux';
// import your Action Creators
import { addBook, removeBook } from '../redux/books/books';

let bookInputValue = '';
let authorInputValue = '';
let catInputValue = '';

const handleBookInputWr = () => {
  bookInputValue = document.getElementById('newBookInp').value;
};
const handleAuthorInputWr = () => {
  authorInputValue = document.getElementById('newAuthInp').value;
};
const handleCatInputWr = () => {
  catInputValue = document.getElementById('newCatInp').value;
};

const clearInput = () => {
  document.getElementById('newBookInp').value = '';
  document.getElementById('newAuthInp').value = '';
  document.getElementById('newCatInp').value = '';
};

const reRender = (callback, state) => {
  if (state) {
    callback(false);
  } else {
    callback(true);
  }
};

const BooksComponent = () => {
  const [trigger, fireTrigger] = useState(true);

  const dispatch = useDispatch();
  const submitBookToStore = (c, t, a) => {
    const newBook = {
      category: c,
      title: t,
      author: a,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      {trigger}
      <ul>
        {store.getState().map((array) => (
          <li key={array.id}>
            <h1>{array.category}</h1>
            <h2>{array.book}</h2>
            <h2>{array.author}</h2>
            <button type="button">Comments</button>
            <button
              type="button"
              onClick={() => {
                removeBook(array.index);
                reRender(fireTrigger, trigger);
              }}
            >
              Remove
            </button>
            <button type="button">Edit</button>
          </li>
        ))}
      </ul>
      <div>
        <input id="newBookInp" type="text" onChange={() => { handleBookInputWr(); }} />
        <input id="newAuthInp" type="text" onChange={() => { handleAuthorInputWr(); }} />
        <input id="newCatInp" type="text" onChange={() => { handleCatInputWr(); }} />
        <button type="button" onClick={() => { submitBookToStore({ catInputValue, bookInputValue, authorInputValue }); reRender(fireTrigger, trigger); clearInput(); }}>Add Book</button>
      </div>
    </div>
  );
};

export default BooksComponent;
