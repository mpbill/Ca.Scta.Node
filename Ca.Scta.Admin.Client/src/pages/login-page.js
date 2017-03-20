/**
 * Created by michael.billingham on 3/14/2017.
 */

import React, {Component} from 'react';

class LoginPage extends Component {


  render(){
    return (
    <div className="container is-mobile">
      <div className="column is-4 is-offset-4">
        <label className="label">Username</label>
        <div className="control">
          <input className="input" type="text" />
        </div>
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" />
        </div>
        <div className="control">
          <button className="button is-primary">Login</button>
        </div>
      </div>
    </div>
    )
  }
}
export default LoginPage;
