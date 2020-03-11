import React from 'react';

const age = Math.floor((new Date() - new Date(birthDate)) / 1000*60*60*24*360);

const Greeting = props => { 
    return (
        <div className="greeting">
            {`My name is
             ${props.firstName}
             ${props.lastName}
             . I'm
             ${age(props.birthDate)} years old`}
        </div>
    ); 
};

export default Greeting;