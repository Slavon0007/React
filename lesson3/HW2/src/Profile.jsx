import React from 'react';
import moment from "moment";





const date = date => moment(date).format("DD MMM YY");


const Profile = props => {
    return (
        <div>
            <div className="profile__name">
                {`${props.userData.firstName} ${props.userData.lastName}`}
            </div>
            <div className="profile__birth">
                {`Was born ${date(props.userData.birthDate)} in ${props.userData.birthPlace}`}
            </div>
        </div>
    )
};
export default Profile;