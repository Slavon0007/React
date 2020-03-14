import React from 'react';
import moment from "moment";
import './styles.scss';





const date = date => moment(date).format("DD MMM YY");


const Profile = props => {
    return (
        <>
            <h1 className="profile__name">
                {`${props.userData.firstName} ${props.userData.lastName}`}
            </h1>
            <p className="profile__birth">
                {`Was born ${date(props.userData.birthDate)} in ${props.userData.birthPlace}`}
            </p>
        </>
    )
};
export default Profile;