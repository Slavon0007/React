import ReactDOM from 'react-dom';
import React from 'react';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Greeting
    firstName="John"
    lastName="Doe"
    birthDate = "2002-11-06T22:00:00.000Z"
/>, rootElement);