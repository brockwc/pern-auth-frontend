import React from 'react'

import { Link } from "react-router-dom";
import BenefitCard from "../components/BenefitCard";

import useBenefits from "../hooks/useBenefits";

const AllBenefits = (props) => {
  const [benefits, fetchBenefits] = useBenefits([])

  const generatedList = () => {
    return benefits.map((benefit, index) => (
      <Link to = {`/allbenefits/${benefit.id}`} key = {index}>
        <BenefitCard benefit = {benefit} />
      </Link>
    ))
  }

  return (
    <div>
      <h1>Here are benefits!</h1>

      <p>This page should display all teas by their name the moment the page is loaded</p>
      { benefits.length ? generatedList() : "Loading..." }
    </div>
  )
}

export default AllBenefits
