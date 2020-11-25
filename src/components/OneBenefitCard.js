
import React from 'react';
const OneBenefitCard = (props) => {
    console.log(props)
    return (
        <div className="TeaCard">
            <h3><u>Name:</u></h3>
            {/* <p>{ props.tea.name }</p> */}
            <h3><u>Benefits:</u></h3>
            {/* { props.benefits.map((teaBenefit, index) => { */}
            {/* return <li>{teaBenefit.name}</li> */}
            {/* } )  } */}
            <h3><u>Type:</u></h3>
            {/* <p>{ props.tea.type }</p> */}
            <h3><u>Description:</u></h3>
            {/* <p>{ props.tea.description }</p> */}
        </div>
    );
}
export default OneBenefitCard;