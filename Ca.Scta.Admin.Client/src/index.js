import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import './global.scss';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import { ApolloClient, createNetworkInterface,ApolloProvider } from 'react-apollo';
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:3000/graphql' }),
  dataIdFromObject:o=>o.id
});
render(
  <ApolloProvider client={client}>
    <Router history={browserHistory} routes={routes}/>
  </ApolloProvider>
,document.getElementById('app'));
