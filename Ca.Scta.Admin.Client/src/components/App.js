/**
 * Created by michael.billingham on 3/14/2017.
 */

import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const NavBar = (
  <nav className="nav">
    <div className="container">
      <div className="nav-left">
        <Link className="nav-item is-tab" activeClassName="is-active" to="/">Home</Link>
        <Link className="nav-item is-tab" activeClassName="is-active" to="/positions">Positions</Link>
      </div>
    </div>

  </nav>
);


class App extends React.Component{
  render(){
    return (
      <div>
        {NavBar}
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children:PropTypes.element
};
export default App;
