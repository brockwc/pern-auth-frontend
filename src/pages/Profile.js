import React, { useState, useEffect } from 'react'
import UserBenefitCard from '../components/UserBenefitCard';
import UserBenefitModel from "../models/userBenefit";

const Profile = (props) => {
  const [userBenefits, setUserBenefits] = useState([])

  const fetchUserBenData = () => {
    UserBenefitModel.all().then(data => {
        console.log(data.userBenefits)
        setUserBenefits(data.userBenefits)
    })
}

useEffect(() => {
  fetchUserBenData()
}, [])


  return (
    <div>
      <h1>Profile of user with ID { props.currentUser }</h1>
      {userBenefits.map((userBenefit, index) => {
        return <p>{userBenefit.name}</p>
      })}
    </div>
    
  )
}

export default Profile