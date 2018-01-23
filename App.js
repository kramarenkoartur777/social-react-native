import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import Home from './src/components/Home';
import rootReducer from './src/rootReducer';

const store = createStore(rootReducer, applyMiddleware(Thunk));

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
