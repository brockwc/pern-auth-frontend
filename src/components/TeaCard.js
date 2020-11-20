import React from 'react';

const TeaCard = (props) => {

  return (
    <div className="TeaCard">
<<<<<<< HEAD
      <h3><u>Name:</u> { props.tea.name }</h3>
      <h3><u>Benefits:</u> { props.tea.benefits.name}</h3>
      <h3><u>Type:</u> { props.tea.type }</h3>
      <h3><u>Description:</u> { props.tea.description }</h3>
=======
      <h3><u>Name:</u></h3>
        <p>{ props.tea.name }</p>
      <h3><u>Benefits:</u></h3> {/* { props.benefit.name } */}
      <h3><u>Type:</u></h3>
        <p>{ props.tea.type }</p>
      <h3><u>Description:</u></h3>
        <p>{ props.tea.description }</p>

      <form action = "/allteas/:id">
        <button type = "submit">Save Tea</button>
      </form>
>>>>>>> submain
    </div>
  );
}

export default TeaCard;