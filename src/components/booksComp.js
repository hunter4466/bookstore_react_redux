import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
import store from '../redux/configureStore';

const BooksComponent = () => {
  const dispatch = useDispatch();
  const [books, UpdateBooks] = useState(store.getState().booksReducer);
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

  const submitBookToStore = (payload) => {
    dispatch(addBook(payload));
    const newState = store.getState().booksReducer;
    UpdateBooks(newState);
    clearInput();
  };
  const removeBookFromStore = (i) => {
    dispatch(removeBook(i));
    UpdateBooks(store.getState().booksReducer);
  };
  return (
    <div>
      <ul>
        {books.map((array) => (
          <li key={array.id}>
            <h1>{array.data.category}</h1>
            <h2>{array.data.title}</h2>
            <h2>{array.data.author}</h2>
            <button type="button">Comments</button>
            <button
              type="button"
              onClick={() => {
                removeBookFromStore(array.id);
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
        <button type="button" onClick={() => { submitBookToStore({ category: catInputValue, title: bookInputValue, author: authorInputValue }); }}>Add Book</button>
      </div>
    </div>
  );
};

export default BooksComponent;
