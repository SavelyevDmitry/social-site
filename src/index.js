import './index.css';
import App from './App';

import React from 'react';
import ReactDOM from 'react-dom/client';

import store from './redux/state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

function appRender() {
  root.render(
    <App  
      state = { store.getState() } 
      addNewPost = { store.addNewPost.bind(store) } 
      updateNewPostText = { store.updateNewPostText.bind(store) }
    />
  );
}

store.subscribe(appRender);
appRender();
