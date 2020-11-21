import React, { useState, useEffect } from 'react'
import UserBenefitCard from '../components/UserBenefitCard';
import UserBenefitModel from "../models/userBenefit";

const Profile = (props) => {
  const [userBenefits, setUserBenefits] = useState([])
  const [userInfo, setUserInfo] = useState(null)

  const fetchUserBenData = () => {
    UserBenefitModel.all().then(data => {
      { console.log(data.userBenefits[0].benefits) }
      { console.log(data.userBenefits[0].firstName) }
      setUserBenefits(data.userBenefits[0].benefits)
      setUserInfo(data.userBenefits[0].firstName)
    })
  }

  useEffect(() => {
    fetchUserBenData()
  }, [])


  return (
    <div>
      <h1>Hello {userInfo}</h1>
      {userBenefits.map((userBenefit, index) => {
        return <p>{userBenefit.name}</p>
      })}
    </div>

  )
}

export default Profile
