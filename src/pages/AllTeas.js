import React from 'react';

import { Link } from "react-router-dom";
import TeaCard from "../components/TeaCard";

import useTeas from "../hooks/useTeas";

const AllTeas = (props) => {
  // with Class state = { prop: value }
  // with hooks [state, setState] = useState(initialValue)
  // we are gonna use our hook
  const [teas, fetchTeas] = useTeas([])

  const generatedList = () => {
    return teas.map((tea, index) => (
      <Link to = {`/onetea/${tea.id}`} key = {index}>
        <TeaCard {...teas} />
      </Link>
    ))
  }




  return (
    <div>
      <h1>Here's all of our teas</h1>
      <p>This page should display all teas by their name the moment the page is loaded</p>
      { teas.length ? generatedList() : "Loading..." }
      <button onClick = {fetchTeas} >Get Teas</button>
      <form action="/onetea">
        <button type = "submit" onClick = {fetchTeas}>Here's a tea you like and want to click</button>
      </form>
    </div>
  )
}

export default AllTeas
