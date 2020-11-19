import React from 'react';

const TeaCard = (props) => {
  // const teaLoop = () => {
  //   for(i = 0; i > tea.length; i++)
  // }


  return (
    <div className="TeaCard">
      <h3>Name:</h3>
        { props.tea.name }
      <h3>Benefits:</h3>
        {/* { props.benefit.name } */}
      <h3>Type:</h3>
        { props.tea.type }
      <h3>Description:</h3>
        { props.tea.description }
    </div>
  );
}

      

export default TeaCard;