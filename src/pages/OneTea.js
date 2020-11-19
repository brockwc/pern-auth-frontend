import React, { useState, useEffect } from 'react'

import UserModel from "../models/user";
import TeaCard from "../components/TeaCard";

const OneTea = (props) => {
  const [tea, setTea] = useState()
  const [currentTea, setCurrentTea] = useState(props.match.params.id)


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    UserModel.show(currentTea).then(data => {
      setTea( data.tea )
    })
  }

  return (
    <div className = "oneTea">
      <h1>Here is your tea of choice!</h1>
      <hr />
      <TeaCard {...tea} />
    </div>
  )
}

export default OneTea
