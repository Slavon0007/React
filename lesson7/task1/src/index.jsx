import React from 'react';
import ReactDOM from 'react-dom';
import './index.html';
import NunbersList from './NumbersList';

const rootElement =document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5, 6];

ReactDOM.render(<NumbersList numbers={numbers}/>, rootElement);