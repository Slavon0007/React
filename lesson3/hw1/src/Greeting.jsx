import React from 'react';

const age = (elem) => Math.floor((new Date() - Date.parse(elem)) / (1000*60*60*24*360));

const Greeting = props => { 
    

    return (
        <div className="greeting"><h1>
            {`My name is
             ${props.firstName}
             ${props.lastName}
             . I'm
             ${age(props.birthDate)} years old`}
       </h1> </div>
    ); 
};

export default Greeting;