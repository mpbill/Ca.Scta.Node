/**
 * Created by michael.billingham on 3/14/2017.
 */
import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import PositionsPage from './pages/positions-page';
import EditPositionWithData from './pages/edit-position';
export default (
  <Route path="/" component={App}>
    <Route component={PositionsPage} path="/positions"/>
    <Route component={EditPositionWithData} path="/positions/:id"/>
  </Route>
)
