import { useState, useEffect } from 'react'
import UserModel from "../models/user"

const useBenefits = () => {
  const [benefits, setBenefits] = useState ([])

  const fetchBenefits = () => {
    UserModel.all().then(data => {
      setBenefits( data.teas )
    })
  }

  useEffect(() => {
    fetchBenefits();
  }, [])

  // return state and our updater function
  return [benefits, fetchBenefits]
}

export default useBenefits
