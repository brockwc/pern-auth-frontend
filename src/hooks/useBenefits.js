import { useState, useEffect } from 'react'
import BenefitModel from "../models/benefit"

const useBenefits = () => {
  const [benefits, setBenefits] = useState ([])

  const fetchBenefits = () => {
    BenefitModel.all().then(data => {
      setBenefits( data.benefits )
    })
  }

  useEffect(() => {
    fetchBenefits();
  }, [])

  // return state and our updater function
  return [benefits, fetchBenefits]
}

export default useBenefits
