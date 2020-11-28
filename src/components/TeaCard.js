import React from 'react'

const TeaCard = (props) => {

  return (
    <div className="TeaCard">
      <h3><u>Name:</u></h3>
        <p>{ props.tea.name }</p>
      <h3><u>Benefits:</u></h3> 
        { props.tea.benefits.map((teaBenefit, index) => {
          return <li key={teaBenefit.id}>{teaBenefit.name}</li>
        } )  }
      <h3><u>Type:</u></h3>
        <p>{ props.tea.type }</p>
      <h3><u>Description:</u></h3>
        <p>{ props.tea.description }</p>
    </div>
  )
}

export default TeaCard