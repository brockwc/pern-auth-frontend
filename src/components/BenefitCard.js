import React, { useState, useEffect } from 'react'
import BenefitModel from '../models/benefit'

const BenefitCard = (props) => {
  const [userBenefits, setUserBenefits] = useState([])

  const createUserBenefit = () => {
    BenefitModel.create().then(data => {
      setUserBenefits(data.userBenefits)
    })
  }

  useEffect(() => {
    createUserBenefit()
}, [])

  return (
    <div className="BenefitCard">
        <p>{ props.benefit.name }</p>
        <form action = "/allbenefits" method="GET">
        <button type = "submit" onClick={`${createUserBenefit}`}>Save Benefit</button>
      </form>
    </div>
  );
}

export default BenefitCard;