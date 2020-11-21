import React from 'react'
import UserBenefitModel from '../models/userBenefit'



const UserBenefitCard = (props) => {
    console.log(props)
    const delUserBen = () => {
        console.log(props.userBenefit.id)
        UserBenefitModel.delete(props.userBenefit.id).then()
    }

    return (
        <div className="UserBenefitCard">
        <p>{ props.userBenefit.name }</p>
        <button onClick={delUserBen}>Remove Benefit</button>
    </div>
    )
}

export default UserBenefitCard