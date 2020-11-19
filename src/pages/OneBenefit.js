import React, { useState, useEffect } from 'react'

import UserModel from "../models/user";
import BenefitCard from "../components/TeaCard";

const OneBenefit = (props) => {
  const [benefit, setBenefit] = useState()
  const [currentBenefit, setCurrentBenefit] = useState(props.match.params.id)


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    UserModel.show(currentBenefit).then(data => {
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
