import React, { Component } from 'react';
import Greeting from './Greeting';
import onLogin from './Login';
import onLogout from './Logout';

class Auth extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };
  render(){
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn
          ? <onLogout isLogin={this.handleLogout} />
          : <onLogin isLogin={this.handleLogin} />}
      </div>
    );
  }
}
export default Auth;