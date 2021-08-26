import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import CategoriesComponent from './redux/categories/categories';
import BooksComponent from './components/booksComp';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <Router>
    <ul className="nav-bar">
      <li>
        Bookstore CMS
      </li>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/">
        <Redirect to="/books" />
      </Route>
      <Route path="/books">
        <BooksComponent />
      </Route>
      <Route path="/categories">
        <CategoriesComponent />
      </Route>
    </Switch>
  </Router>
);
export default App;
