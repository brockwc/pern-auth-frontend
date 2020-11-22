import React from 'react'
import BenefitModel from '../models/benefit'
import {useHistory} from 'react-router-dom'

const BenefitCard = (props) => {
  let history = useHistory()

  const addBenefit = () => {
    const userId = localStorage.getItem('id')
    BenefitModel.create(props.benefit, userId).then(data => history.push('/profile'))
  }

  return (
    <div className="BenefitCard">
        <p>{ props.benefit.name }</p>
        <button onClick={addBenefit}>Save Benefit</button>
    </div>
  );
}

export default BenefitCard;