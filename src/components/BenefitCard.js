import React from 'react';

const BenefitCard = (props) => {
  return (
    <div className="BenefitCard">

      <h3>Benefits:</h3>
        <p>{ props.benefit.name }</p>

    </div>
  );
}

export default BenefitCard;