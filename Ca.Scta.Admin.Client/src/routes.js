/**
 * Created by michael.billingham on 3/14/2017.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './pages/login-page';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage}/>
  </Route>
)
