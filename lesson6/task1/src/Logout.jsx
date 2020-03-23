import React from 'react';

const onLogout = props => {
    return (
      <button className="btn logout" onClick={props.isLogin}>Logout</button>
    );
}
export default onLogout;