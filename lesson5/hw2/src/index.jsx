import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import ColorPicker from './ColorPicker';

const rootElem = document.querySelector('#root');

ReactDOM.render(<ColorPicker /> , rootElem);