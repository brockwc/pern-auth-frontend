import React, { useState, useEffect } from 'react'

import BenefitModel from "../models/benefit";
import OneBenefitCard from "../components/BenefitCard";

const OneBenefit = (props) => {
  const [benefit, setBenefit] = useState()
  const [currentBenefit, setCurrentBenefit] = useState(props.match.params.id)
  useEffect(() => {
    fetchBenData()
  }, [])

  const fetchBenData = () => {
    BenefitModel.show(currentBenefit).then(data => {
      setBenefit( data.benefit )
    })
  }

  console.log(benefit)

  return (
    <div>
      <h1>Here is the one benefit you chose</h1>
        <OneBenefitCard benefit={benefit} />
    </div>
  )
}

export default OneBenefit
