import React from 'react';

const age = birthDate => {
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}

const Greeting = props => {
    return (
        <header className="greeting">
            {`My name is
             ${props.firstName}
             ${props.lastName}. I'm
             ${props.birthDate} years old`}
        </header>
    );
};

export default Greeting;