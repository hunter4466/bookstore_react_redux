/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
import store from '../redux/configureStore';

const BooksComponent = () => {
  const [trigger, fireTrigger] = useState(true);
  const dispatch = useDispatch();
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

  const submitBookToStore = (c, t, a) => {
    dispatch(addBook(c, t, a));
  };
  const removeBookFromStore = (i) => {
    dispatch(removeBook(i));
  };

  return (
    <div>
      {trigger}
      <ul>
        {store.getState().booksReducer.map((array) => (
          <li key={array.id}>
            <h1>{array.category}</h1>
            <h2>{array.title}</h2>
            <h2>{array.author}</h2>
            <button type="button">Comments</button>
            <button
              type="button"
              onClick={() => {
                removeBookFromStore(array.id);
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
        <button type="button" onClick={() => { submitBookToStore(catInputValue, bookInputValue, authorInputValue); reRender(fireTrigger, trigger); clearInput(); }}>Add Book</button>
      </div>
    </div>
  );
};

export default BooksComponent;
