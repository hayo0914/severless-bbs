import React from 'react';
import { AppRegistry, View, Dimensions } from 'react-native-web';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { Home } from './pages';
import reducers from './reducers';
import saga from './sagas';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBVNqI3Z5l53817HOmrWNz7It7I3fOPtWY',
    authDomain: 'sl-bbs.firebaseapp.com',
    databaseURL: 'https://sl-bbs.firebaseio.com',
    projectId: 'sl-bbs',
    storageBucket: 'sl-bbs.appspot.com',
    messagingSenderId: '870713082514',
  });
  require('firebase/firestore');
  firebase.firestore().settings({
    timestampsInSnapshots: true,
  });
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(saga);

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ height: Dimensions.get('window').height }}>
        <Home />
      </View>
    </Provider>
  );
};

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
