import React, { useState, useEffect } from 'react'

import BenefitModel from "../models/benefit";
import BenefitCard from "../components/BenefitCard";

const OneBenefit = (props) => {
  const [benefit, setBenefit] = useState()
  const [currentBenefit, setCurrentBenefit] = useState(props.match.params.id)


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    BenefitModel.show(currentBenefit).then(data => {
      setBenefit( data.benefit )
    })
  }

  return (
    <div>
      <h1>Here is the one benefit you chose</h1>
      <hr />
      <BenefitCard {...benefit} />
    </div>
  )
}

export default OneBenefit
