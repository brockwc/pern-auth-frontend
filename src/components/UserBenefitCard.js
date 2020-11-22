import React from 'react'
import UserBenefitModel from '../models/userBenefit'



const UserBenefitCard = (props) => {
    
    const delUserBen = () => {
        UserBenefitModel.delete(props.userBenefit.id).then(window.location.reload())
    }


    
    return (
        <div className="UserBenefitCard">
        <h3>{ props.userBenefit.name }</h3>
        <button onClick={''}>See Teas</button> <br />
        <button onClick={delUserBen}>Remove Benefit</button>
    </div>
    )
}

export default UserBenefitCard