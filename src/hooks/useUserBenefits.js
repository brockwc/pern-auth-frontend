import { useState, useEffect } from 'react'
import UserBenefitModel from "../models/userBenefits"

const useUserBenefits = () => {
    const [userBenefits, setUserBenefits] = useState()

    const fetchUserBenData = () => {
        UserBenefitModel.all().then(data => {
            console.log('helllloooo')
            setUserBenefits(data.userBenefits)
        })
    }

    useEffect(() => {
        fetchUserBenData()
    }, [])


    // return state and our updater function
    return [userBenefits, fetchUserBenData]
}

export default useUserBenefits