import React, { useEffect, useState } from 'react';


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

    console.log(user)

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
        // if (password === confirmPassword) {
        //     UserModel.create({ firstName, lastName, email, password })
        //         .then(data => {
        //             console.log('Successful register', data)
        //             // redirect to /login
        //             props.history.push('/profile')
        //         })
        // }
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