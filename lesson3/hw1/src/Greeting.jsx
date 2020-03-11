import React from 'react';

const age = Math.floor((new Date() - new Date(birthDate)) / new Date(3600*24*1000));

const Greeting = props => { 
    return (
        <div className="greeting">
            {`My name is
             ${props.name}
             . I'm
             ${age(props.birthDate)} years old`}
        </div>
    ); 
};

export default Greeting;