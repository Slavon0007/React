import React from 'react';

const onLogin = props => {
    return (
      <button className="btn login" onClick={props.isLogin}>Login</button>
    );
}
export default onLogin;