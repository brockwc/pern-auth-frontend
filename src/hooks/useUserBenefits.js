import { useState, useEffect } from 'react'
import UserBenefitModel from "../models/userBenefits"

const useUserBenefits = () => {
    const [userBenefits, setUserBenefits] = useState()


    // return state and our updater function
    return [userBenefits, fetchUserBenData]
}

export default useUserBenefits