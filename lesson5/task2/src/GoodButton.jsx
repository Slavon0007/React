import React from 'react';
import './styles.scss'


class GoodButton extends React.Component{
    handleClick(e){
        alert(document.querySelector('.fancy-button').textContent)
    }

    render(){
        return(
            <button
            className="fancy-button"
            onClick={this.handleClick}
        >
            Click me!
        </button>
        );

    }
    
}


export default GoodButton;