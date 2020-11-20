import { useState, useEffect } from 'react'
import UserBenefitModel from "../models/userBenefits"

const useUserBenefits = () => {
    const [userBenefits, setUserBenefits] = useState()

    // const fetchUserBenData = () => {
    //     UserBenefitModel.all().then(data => {
    //         setUserBenefits(data.userBenefits)
    //         console.log(userBenefi)
    //     })
    // }

    // useEffect(() => {
    //     fetchUserBenData()
    // }, [])


    // return state and our updater function
    return [userBenefits, fetchUserBenData]
}

export default useUserBenefits