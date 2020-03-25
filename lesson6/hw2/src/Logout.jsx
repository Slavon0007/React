  
import React, { Component } from 'react';
import './styles.scss';





const Logout = props => {
  return (
      <button
          className="logout btn"
          onClick={props.onLogout()}
      >
          Logout
      </button>
  )
};

export default Logout;