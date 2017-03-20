/**
 * Created by michael.billingham on 3/14/2017.
 */

import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children:PropTypes.element
};
export default App;
