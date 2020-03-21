import React from 'react';


class Toggler extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'Off',
        };
    }
    chengeText(){
        this.setState({
           text:this.state.text === 'Off ' 
           ? 'On'
           : 'Off'
        })
    }

    render(){
        return(
            <button
                className="toggle"
                onClick={()=>this.chengeText()}
            >
                {this.state.text}
            </button>
        )
    }
}

export default Toggler;