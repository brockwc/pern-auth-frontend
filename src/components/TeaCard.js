import React from 'react';
import AllBenefits from "../pages/AllBenefits"

const TeaCard = (props) => {
  // const teaLoop = () => {
  //   for(i = 0; i > tea.length; i++)
  // }

  return (
    <div className="TeaCard">
      <h3><u>Name:</u> { props.tea.name }</h3>
      <h3><u>Benefits:</u> {/* { props.benefit.name } */}</h3>
      <h3><u>Type:</u> { props.tea.type }</h3>
      <h3><u>Description:</u> { props.tea.description }</h3>

      <form action = "/allteas/:id">
        <button type = "submit">Save Tea</button>
      </form>
    </div>
  );
}

export default TeaCard;