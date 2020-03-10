import React from 'react';

const getAge = birthDate => { 
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}

const Greeting = props => { 
    return (
        <div className="greeting">
            {`My name is
             ${props.name}
             . I'm
             ${getAge(props.birthDate)} years old`}
        </div>
    ); 
};

export default Greeting;