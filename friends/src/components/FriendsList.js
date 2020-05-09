import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Axios/axiosWithAuth';
import FriendsCard from './FriendCard';
import FriendsForm from './FriendsForm';

const Friends = props => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log('res', res);
            setFriends(res.data)
            })
    }, [])
    return (
        <div>

        <FriendsForm />
        <FriendsCard key={friends.id} friends={friends}/>

        </div>
    )
}
export default Friends;