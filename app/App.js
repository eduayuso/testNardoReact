import React, {Component, Fragment } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Text, View } from 'react-native';

import * as reducers from './reducers';
import CounterApp from './counterApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello, world!</Text>
        </View>
        <Provider store={store}>
          <CounterApp />
        </Provider>
      </Fragment>
    );
  }
}