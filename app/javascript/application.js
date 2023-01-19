import React from 'react';
import ReactDOM from 'react-dom';
import store from './configureStore';
import Greeting from './Greeting';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store= {store}>
    <Greeting />
  </Provider>,
  document.getElementById('greeting'),
);
