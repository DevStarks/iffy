import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const rootNode = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const initialState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  Modal.setAppElement(rootNode);

  ReactDOM.render(<Root store={store} />, rootNode);
});
