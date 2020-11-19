import React from 'react';

const BenefitCard = (props) => {
  return (
    <div className="BenefitCard">

      <h3>Benefits:</h3>
        <p>Display the super powers from drinking this</p>
        { props.benefit }

    </div>
  );
}

export default BenefitCard;