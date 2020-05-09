import React, { useState } from 'react'
import { axiosWithAuth } from '../Axios/axiosWithAuth'


function FriendsForm() {
    
    const [ friendsForm, setFriendsForm  ] = useState({ name:'', age: '', email:'' })


const handleOnchange = (e) => {

    setFriendsForm({...friendsForm, [e.target.name]: e.target.value })

}

const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('/friends', friendsForm)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => window.location.reload())
}



function updateFriend(e, id) {
    e.preventDefault();
    console.log("updating");
    axiosWithAuth()
      .put(`/friends/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log('update error ', err))
      .finally(() => window.location.reload());
  }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a new Friend</h2>
            <label>
                <input 
                  name='name' 
                  type='text' 
                  value={friendsForm.value} 
                  onChange={handleOnchange} 
                  placeholder='name'>
                </input>
            </label>
            <label>
                <input 
                  name='age' 
                  type='number' 
                  values={friendsForm.value} 
                  onChange={handleOnchange} 
                  placeholder='age'>
                </input>
            </label>
            <label>
                <input 
                  name='email' 
                  type='email' 
                  values={friendsForm.value} 
                  onChange={handleOnchange} 
                  placeholder='email'>
                </input>
            </label>
            <label>
                <button type='submit'>ADD</button>
                <button type='submit' onClick={updateFriend} >UPDATE</button>
            </label>
        </form>
    )
}

export default FriendsForm;