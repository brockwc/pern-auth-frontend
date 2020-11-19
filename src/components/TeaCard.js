import React from 'react';

const TeaCard = (props) => {
  return (
    console.log(props.id),
    <div className="TeaCard">
      <p>{props.name}</p>
    </div>
  );
}

{/* 
      <h3>Name:</h3>
        { props.name }
      <h3>Benefits:</h3>
        { props.benefits }
      <h3>Type:</h3>
        { props.type }
      <h3>Description:</h3>
        { props.description } */}

export default TeaCard;