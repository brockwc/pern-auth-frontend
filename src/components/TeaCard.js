import React from 'react';

const TeaCard = (props) => {
  return (
    <div className="TeaCard">

      <h3>Name:</h3>
        <p>New Tea, Who dis?</p>
        { props.name }
      <h3>Benefits:</h3>
        <p>Display the super powers from drinking this</p>
        { props.benefit }
      <h3>Type:</h3>
        <p>Oooo gurl, what's yo type?</p>
        { props.type }
      <h3>Description:</h3>
        <p>In a far off place, in a bush from a land, came the tea leaf and a description.</p>
        { props.description }
    </div>
  );
}

export default TeaCard;