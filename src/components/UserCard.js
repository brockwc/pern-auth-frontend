import React, { useEffect, useState } from 'react';
import UserEditModel from '../models/userEdit'


const UserCard = ({user}) => {
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');

    useEffect(() => {
        if(user){
            setNewFirstName(user.firstName);
            setNewLastName(user.lastName);
            setNewEmail(user.email);
        }
    }, [user])

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
            UserEditModel.update()
                .then(data => {
                    console.log('Successful update', data)
                })
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
export default UserCard;
