/// external modules ///
import React from 'react';
import ReactDOM from 'react-dom';
import * as redux from 'redux';
import * as ReactRedux from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/// styles ///
import 'reset-css/reset.css';
import 'normalize-css/normalize.css';
import './styles/o11-basics.css';
import './styles/index.css';

/// components ///
import App from './App';

/// states ///
import smurfs from 'states/smurfs';

/***************************************
  APP
***************************************/

const compose = (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose
);

const smurfsStore = smurfs.store.create (
  compose (redux.applyMiddleware (thunk, logger))
);

ReactDOM.render (
  <ReactRedux.Provider store={smurfsStore}>
    <App/>
  </ReactRedux.Provider>
, document.getElementById ('root')
);
