import React from 'react';
const OneBenefitCard = (props) => {

  return (
    <div className="TeaCard">
      <h3><u>Name:</u></h3>
        <p>{ props.allBenTeas.name }</p>
      <h3><u>Type:</u></h3>
        <p>{ props.allBenTeas.type }</p>
      <h3><u>Description:</u></h3>
        <p>{ props.allBenTeas.description }</p>
    </div>
  );
}

export default OneBenefitCard;