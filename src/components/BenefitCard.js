import React from 'react'
import createUserBenefit from '../hooks/useBenefits'

const BenefitCard = (props) => {
  return (
    <div className="BenefitCard">
        <p>{ props.benefit.name }</p>
        <form>
        <button onClick={() => createUserBenefit(props.benefit)}>Save Benefit</button>
      </form>
    </div>
  );
}

export default BenefitCard;