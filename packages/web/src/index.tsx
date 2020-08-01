import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './modules/Router';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
