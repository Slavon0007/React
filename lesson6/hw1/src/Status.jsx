import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component{
  state = {
    isOnline: true,
  };

  setOnline = ()=>{
    this.setState({
      isOnline: true
    })
  };
  setOffline = ()=>{
    this.setState({
      isOnline: false
    })
  }
  render(){
    return (
      this.state.isOnline
      ? <Online />
      : <Offline />    
    );
  }
}
export default Status;