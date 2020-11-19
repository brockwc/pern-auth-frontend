import React from 'react';

import { Link } from "react-router-dom";
import TeaCard from "../components/TeaCard";
import BenefitCard from "../components/BenefitCard";
import useBenefits from "../hooks/useBenefits"

import useTeas from "../hooks/useTeas";

const AllTeas = (props) => {
  const [teas, fetchTeas] = useTeas()
  const [benefits, fetchBenefits] = useBenefits([])

  const generatedList1 = () => {
    return benefits.map((benefit, index) => (
      <Link to = {`/allbenefits/${benefit.id}`} key = {index}>
        <BenefitCard benefit={benefit} />
      </Link>
    ))
  }

  const generatedList = () => {
    return teas.map((tea, index) => (
      <Link to = {`/allteas/${tea.id}`} key = {index}>
        <TeaCard tea={tea} />
      </Link>
    ))
  }

  return (
    <div>
      <h1>Here's all of our teas</h1>
      <p>This page should display all teas by their name the moment the page is loaded</p>
      { teas.length ? generatedList() : "Loading..." }
      { benefits.length ? generatedList1() : "Loading..." }
      <form action="/allteas/:id">
        <button type = "submit" onClick = {fetchTeas}>Here's a tea you like and want to click</button>
      </form>
    </div>
  )
}

export default AllTeas
