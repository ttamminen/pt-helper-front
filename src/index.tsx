import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker'
import './index.css';
import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBCAqcfCxcQ0iTen_QckZjbGblr1Z8HwPI',
  authDomain: 'pt-helper-dba4b.firebaseapp.com',
  databaseURL: 'https://pt-helper-dba4b.firebaseio.com',
  projectId: 'pt-helper-dba4b',
  storageBucket: 'pt-helper-dba4b.appspot.com',
  messagingSenderId: '829316328968'
}
firebase.initializeApp(config)
firebase.auth().getRedirectResult().then(function(result) {
  ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
  );
  registerServiceWorker()
}).catch(function(error) {
  console.log(error)
})
