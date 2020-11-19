import React from 'react';

const BenefitCard = (props) => {
  
  return (
    <div className="BenefitCard">

        <h3>{ props.benefit.name }</h3>
        <form action = "/allbenefits/:id">
          <button type = "submit">Save Benefit</button>
        </form>

    </div>
  );
}

export default BenefitCard;