import React, { useState, useEffect } from 'react'

import BenefitModel from "../models/benefit";
import BenefitCard from "../components/BenefitCard";

const OneBenefit = (props) => {
  const [benefit, setBenefit] = useState()
  const [currentBenefit, setCurrentBenefit] = useState(props.match.params.id)
  console.log(currentBenefit)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    BenefitModel.show(currentBenefit).then(data => {
      setBenefit( benefit )
    })
  }

  return (
    <div>
      <h1>Here is the one benefit you chose</h1>
      <hr />
      
    </div>
  )
}

export default OneBenefit
