import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/_books.scss';
import './styles/_main.scss';
import './images/assets/loading.png';
import './images/assets/user.png';
import './images/assets/separator.png';
import reportWebVitals from './reportWebVitals';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
