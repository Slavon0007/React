import React from 'react';
import Massage from './Message';

const text1 = "Hello , world";
const text2 = "Anoher exciting text.";



class Page extends React.Component{
    state ={
        text =null;
    };
    setState = text =>{
        this.setState({
            text
        });
    }
    render(){
        return(
            <div className="page">
                <Message text={this.state.text} />
                <div className="actions">
                    <button className="btn" onClick={() => this.setText(text1)}>Text 1</button>
                    <button className="btn" onClick={() => this.setText(text2)}>Text 2</button>
                    <button className="btn" onClick={() => this.setText(null)}>Clear</button>
                </div>
            </div>
        )
    }
}

export default Page;