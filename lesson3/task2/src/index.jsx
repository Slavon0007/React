import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './search.css';

const rootElement = document.querySelector('#root');

class Search extends Component{
  render(){
    return (
      <div className="search">
        <h1 className="search__title">{`Hello, ${this.props.name}. What to search for you`}</h1>
        <div className="search__field">
          <input type="text" className="search__input"/>
          <button className="search__button">Search</button>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Search name="Tom" />, rootElement);