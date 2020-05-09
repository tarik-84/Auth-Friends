import React from 'react';
import { axiosWithAuth } from '../Axios/axiosWithAuth'


const FriendsCard = (props) => {

    function deleteFriend(e, id) {
        e.preventDefault();
        console.log("deleting");
        axiosWithAuth()
          .delete(`/friends/${id}`)
          .then((res) => console.log(res))
          .catch((err) => console.log('delete error ', err))
          .finally(() => window.location.reload());
      }



    return (
        <>
        {props.friends.map(friend => {
            return (
                <div className='card' key={friend.id}>
                  <h2>{friend.name}</h2>
                  <p>{friend.age}</p>
                  <p>{friend.email}</p>
                  <button onClick={(e) => deleteFriend(e, friend.id)}>Delete</button>
                </div>
            )
        })}
        </>
    )
}
export default FriendsCard;