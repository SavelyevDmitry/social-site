import './index.css';
import App from './App';

import React from 'react';
import ReactDOM from 'react-dom/client';

// import store from './redux/state.js';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store = { store } >
    <App  
      state = { store.getState() } 
      dispatch = { store.dispatch.bind(store) }
    />
  </Provider>
);


// store.subscribe(appRender);
// appRender();
