import React, { useState, useEffect } from 'react'
import UserModel from '../models/user'
import UserCard from '../components/UserCard'

function User() {
    const [foundUser, setFoundUser] = useState()

    useEffect(() => {
        findUser()
    }, [])


    const findUser = () => {
        UserModel.show(foundUser).then(data => {
            setFoundUser(data.foundUser)
        })
    }
    console.log(foundUser)

    return (
        <div>
            <UserCard user={foundUser} />
        </div>
    )
}

export default User
