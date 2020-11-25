import React from 'react'
import { Link } from 'react-router-dom' 
import UserBenefitModel from '../models/userBenefit'




const UserBenefitCard = (props) => {
    
    const delUserBen = () => {
        UserBenefitModel.delete(props.userBenefit.id).then(window.location.reload())
    }
    
    return (
        <div className="UserBenefitCard">
        <p>{ props.userBenefit.name }</p>
        <Link to={`/allbenefits/${props.userBenefit.id}`}>See Teas</Link> <br />
        <button onClick={delUserBen}>Remove Benefit</button>
    </div>
    )
}

export default UserBenefitCard