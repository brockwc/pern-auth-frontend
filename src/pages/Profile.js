import React, { useState, useEffect } from 'react'
import UserBenefitCard from '../components/UserBenefitCard';
import UserBenefitModel from "../models/userBenefit";

const Profile = (props) => {

  return (
    <div>
      <h1>Profile of user with ID { props.currentUser }</h1>
    </div>
    
  )
}

export default Profile