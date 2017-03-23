/**
 * Created by michael.billingham on 3/14/2017.
 */

import React, {Component} from 'react';
import 'whatwg-fetch';
class LoginPage extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state ={username:'',password:''};
  }
  onClick(e){
    fetch('http://localhost:3000/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username:this.state.username,
        password:this.state.password
      })
    })
  }
  onChange(e){
    let partialState ={};
    partialState[e.target.id]=e.target.value;
    this.setState(partialState);
  }

  render(){
    return (
    <div className="container is-mobile">
      <div className="column is-4 is-offset-4">
        <label className="label">Username</label>
        <div className="control">
          <input className="input" type="text" id={'username'} onInput={this.onChange} value={this.state.username}/>
        </div>
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" onInput={this.onChange} id={'password'} value={this.state.password}/>
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.onClick}>Login</button>
        </div>
      </div>
    </div>
    )
  }
}
export default LoginPage;
