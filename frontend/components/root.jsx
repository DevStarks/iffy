import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';

const Root = ({ store }) => {

  // const _redirectIfLoggedIn = (nextState, replace) => {
  //   if (store.getState().session.currentUser) {
  //     replace("home");
  //   }
  // };
  //
  // const _ensureLoggedIn = (nextState, replace) => {
  //   if (!store.getState().session.currentUser) {
  //     replace("/");
  //   }
  // };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />


      </Router>
    </Provider>
  );
};


export default Root;
