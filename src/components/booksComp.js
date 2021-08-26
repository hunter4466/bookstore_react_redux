import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook, updateBook } from '../redux/books/books';
import store from '../redux/configureStore';

const BooksComponent = () => {
  const dispatch = useDispatch();
  const [books, UpdateAllBooks] = useState([]);
  const updateAll = () => {
    UpdateAllBooks(store.getState().booksReducer);
  };
  store.subscribe(updateAll);
  useEffect(() => {
    fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/IdvgzwEjGRTOM81F7XDt/books',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
      .then((json) => dispatch(updateBook(json)));
  }, []);

  let bookInputValue = '';
  let catInputValue = '';

  const handleBookInputWr = () => {
    bookInputValue = document.getElementById('newBookInp').value;
  };

  const handleCatInputWr = () => {
    catInputValue = document.getElementById('newCatInp').value;
  };

  const clearInput = () => {
    document.getElementById('newBookInp').value = '';
    document.getElementById('newCatInp').value = '';
  };

  const submitBookToStore = (payload) => {
    dispatch(addBook(payload));
    clearInput();
  };
  const removeBookFromStore = (i) => {
    dispatch(removeBook(i));
  };
  const idGenerator = () => {
    const guid = () => {
      const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    };
    const newKey = guid();
    return newKey;
  };

  const handleSubmit = () => {
    const uniqueId = idGenerator();
    const toSubmit = {};
    toSubmit[uniqueId] = [{
      category: catInputValue,
      title: bookInputValue,
    }];
    submitBookToStore(toSubmit);
  };

  return (
    <div>
      <ul>
        {Object.keys(books).map((array) => (
          <li key={array}>
            <h1>{books[array][0].category}</h1>
            <h2>{books[array][0].title}</h2>
            <button type="button">Comments</button>
            <button
              type="button"
              onClick={() => {
                removeBookFromStore(array);
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
        <input id="newCatInp" type="text" onChange={() => { handleCatInputWr(); }} />
        <button
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default BooksComponent;
