import React from 'react'

function AllBenefits() {
  return (
    <div>
      <h1>Here are benefits!</h1>

      <p>Clicking the button below should replicate a user clicking on the name of a tea that they like.</p>
      <form action="/onebenefit">
        <button type = "submit">Here's a benefit you like</button>
      </form>
    </div>
  )
}

export default AllBenefits
