import React from 'react';

import { Link } from "react-router-dom";
import TeaCard from "../components/TeaCard";

import useTeas from "../hooks/useTeas";

const AllTeas = (props) => {
  const [teas, fetchTeas] = useTeas()

  const generatedList = () => {
    return teas.map((tea, index) => (
      <Link to = {`/allteas/${tea.id}`} key = {index}>
        <TeaCard tea = {tea} />
      </Link>
    ))
  }

  return (
    <div>
      <h1>Here's all of our teas</h1>
      <p>This page should display all teas by their name the moment the page is loaded</p>
      { teas.length ? generatedList() : "Loading..." }
    </div>
  )
}

export default AllTeas
