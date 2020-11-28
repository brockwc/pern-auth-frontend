import React, { useState } from 'react'
// import UserModel from '../models/user'

const UserCard = (props) => {

    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [newEmail, setNewEmail] = useState('')

    const handleNewFirstName = e => {
        setNewFirstName(e.target.value)
    }
    const handleNewLastName = e => {
        setNewLastName(e.target.value)
    }
    const handleNewEmail = e => {
        setNewEmail(e.target.value)
    }
    
    const handleNewSubmit = e => {
        e.preventDefault()


    }

    return (

        <div className="RegDiv">
            <h2>Update User Info</h2>
            <form onSubmit={handleNewSubmit}>
                <div className="form-group">
                    <label htmlFor="name">First Name:</label>
                    <input
                        onChange={handleNewFirstName}
                        value={newFirstName}
                        type="text"
                        id="name"
                        name="name"
                        //placeholder
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Last Name:</label>
                    <input
                        onChange={handleNewLastName}
                        value={newLastName}
                        type="text"
                        id="name"
                        name="name"
                        //placeholder
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email:</label>
                    <input
                        onChange={handleNewEmail}
                        value={newEmail}
                        type="email"
                        id="email"
                        name="email"
                        //placeholder
                        required
                    />
                </div>
               
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UserCard



// <div class="update">
//     <form action="/update?_method=PUT" method="POST">
//         <input class="form-control" name="firstName" type="text" placeholder="Name" value={props.user.firstName}>
//             <input class="form-control" name="lastName" type="text" placeholder="Name" value={props.user.lastName}>
//                 <input class="form-control" name="email" type="text" placeholder="Email" value={user.email}>
//                     <button type="submit" class="btn btn-primary done">Done</button>
//     </form>
// </div>