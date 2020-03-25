import React, { Component } from 'react';
import  './styles.scss';


const Spiner = props => {
  return (
      <span
        className ='spiner'
        style={{width:props.size, height:props.size}}
      >

      </span>
  )
};

export default Spiner;