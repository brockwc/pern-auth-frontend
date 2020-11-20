import React from 'react';
import useBenefits from "../hooks/useBenefits";
import useTeas from "../hooks/useTeas";

const TeaCard = (props) => {
  const [teas, fetchTeas] = useTeas()

  return (
    <div className="TeaCard">
      <h3><u>Name:</u></h3>
        <p>{ props.tea.name }</p>
      <h3><u>Benefits:</u></h3> 
        { props.tea.benefits.map((teaBenefit, index) => {
          return <li>{teaBenefit.name}</li>
        } )  }
      <h3><u>Type:</u></h3>
        <p>{ props.tea.type }</p>
      <h3><u>Description:</u></h3>
        <p>{ props.tea.description }</p>

      <form action = "/allteas/:id">
        <button type = "submit">Save Tea</button>
      </form>
    </div>
  );
}

export default TeaCard;