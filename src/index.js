import React from 'react';
import { AppRegistry, View, Dimensions } from 'react-native-web';
import firebase from 'firebase';
import { Home } from './screens';

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

const App = () => (
  <View style={{ height: Dimensions.get('window').height }}>
    <Home />
  </View>
);

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
