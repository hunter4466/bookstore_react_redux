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
    <div className="main_container">
      <ul className="nav-bar">
        <li className="list nav-bar-links">
          <h1 className="montserrat-bold main_title">Bookstore CMS</h1>
        </li>
        <li className="list nav-bar-links link_route_cont">
          <Link className="montserrat-regular link_route" to="/">BOOKS</Link>
        </li>
        <li className="list nav-bar-links link_route_cont">
          <Link className="montserrat-regular link_route" to="/categories">CATEGORIES</Link>
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
    </div>
  </Router>
);
export default App;
