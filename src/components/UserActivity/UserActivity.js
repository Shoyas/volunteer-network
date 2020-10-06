import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const UserActivity = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [activity, setActivity] = useState([]);
    console.log(activity);
    useEffect(() => {
        fetch('https://gentle-river-59668.herokuapp.com/userList?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setActivity(data));
    }, [])

    return (
        <div>
            <h3>You have: {activity.length} </h3>
            {
                activity.map(user => <li>{user.userName} {user.useEmail} {user.name}</li> )
            }
        </div>
    );
};

export default UserActivity;