import React from 'react';
import AllBenefits from "../pages/AllBenefits"

const TeaCard = (props) => {
  // const teaLoop = () => {
  //   for(i = 0; i > tea.length; i++)
  // }
  console.log(props.tea.benefits)

  return (
    <div className="TeaCard">
      <h3><u>Name:</u> { props.tea.name }</h3>
      <h3><u>Benefits:</u> {/* { props.tea.benefit.name } */}</h3>
      <h3><u>Type:</u> { props.tea.type }</h3>
      <h3><u>Description:</u> { props.tea.description }</h3>
    </div>
  );
}

export default TeaCard;