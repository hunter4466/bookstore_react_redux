import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook, updateBook } from '../redux/books/books';
import store from '../redux/configureStore';

const BooksComponent = () => {
  const dispatch = useDispatch();
  const [books, UpdBooks] = useState([]);
  const updateAll = () => {
    UpdBooks(store.getState().booksReducer);
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
    const bookInputValue = document.getElementById('newBookInp').value;
    const catInputValue = document.getElementById('newCatInp').value;
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
      <ul className="articles_container">
        {Object.keys(books).map((array) => (
          <li className="article_wrap" key={array}>
            <h1 className="montserrat-bold category_tag">{books[array][0].category}</h1>
            <h2 className="roboto-bold title_tag">{books[array][0].title}</h2>
            <button className="article_btn" type="button">Comments</button>
            <button
              className="roboto-bold article_btn"
              type="button"
              onClick={() => {
                removeBookFromStore(array);
              }}
            >
              Remove
            </button>
            <button className="article_btn" type="button">Edit</button>
          </li>
        ))}
      </ul>
      <div className="add_section_main_container">
        <h1 className="montserrat-bold add_section_title">
          ADD NEW BOOK
        </h1>
        <div className="input_area">
          <input placeholder="Title" className="montserrat-regular add_input_1" id="newBookInp" type="text" />
          <select placeholder="Category" className="montserrat-regular add_input_2" id="newCatInp" name="cars">
            <option disabled selected>Category</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Horror">Horror</option>
            <option value="Animated">Animated</option>
            <option value="Romantic">Romantic</option>
            <option value="ScyFy">ScyFy</option>
          </select>
          <button
            className="add_btn roboto-bold"
            type="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            ADD BOOK
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksComponent;
