
import { useState, useEffect } from 'react'
import BenefitModel from "../models/benefit"

const useBenefits = () => {
  const [benefits, setBenefits] = useState([])

  const createUserBenefit = (benefitData) => {
    BenefitModel.create(benefitData).then(data => {
      // setUserBenefits(data)
    })
  }

  const fetchBenefits = () => {
    BenefitModel.all().then(data => {
      setBenefits( data.benefits )
    })
  }

  useEffect(() => {
    fetchBenefits()
    createUserBenefit()
  }, [])

  // return state and our updater function
  return [benefits, fetchBenefits]
}

export default useBenefits
