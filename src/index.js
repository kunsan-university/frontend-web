import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import Reduxthunk from 'redux-thunk';
import { Reset } from 'styled-reset';
import App from './App';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Reduxthunk)),
);

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
