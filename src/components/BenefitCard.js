import React from 'react'
import createUserBenefit from '../hooks/useBenefits'

const BenefitCard = (props) => {
  return (
    <div className="BenefitCard">
        <p>{ props.benefit.name }</p>
        <form action = "/allbenefits" method="POST">
        <button type = "submit" onClick={createUserBenefit}>Save Benefit</button>
      </form>
    </div>
  );
}

export default BenefitCard;