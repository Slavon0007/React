import React from 'react';
import './styles.scss';


const Login = props => {
  return (
      <button
          className="login btn"
          onClick={props.onLogin()}
      >
          Login
      </button>
  )
};

export default Login;