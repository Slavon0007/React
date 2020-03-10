import React from 'react';
import moment from "moment";
import ReactDOM from 'react-dom';



const rootElem = document.querySelector('#root');

const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
}

ReactDOM.render(<Profile userData={userData}/>, rootElem);




const getDate = date => moment(date).format("DD MMM YY");


const Profile = props => {
    return (
        <>
            <div className="profile__name">
                {`${props.userData.firstName} ${props.userData.lastName}`}
            </div>
            <div className="profile__birth">
                {`Was born ${getDate(props.userData.birthDate)} in ${props.userData.birthPlace}`}
            </div>
        </>
    )
};
export default Profile;