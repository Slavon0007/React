import React from 'react';
import './styles.scss'


class GoodButton extends React.Component{
    handelClick(){
        alert('Good job!');
    }

    render(){
        return(
            <button
            className="fancy-button"
            onClick={this.handelClick}
        >
            Click me!
        </button>
        )

    }
    
}


export default GoodButton;