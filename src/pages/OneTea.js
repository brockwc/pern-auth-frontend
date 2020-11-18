import React from 'react'

function OneTea() {
  return (
    <div className = "oneTea">
      <h1>Here is your tea of choice!</h1>

      <h3>Name:</h3>
        <p>New Tea, Who dis?</p>
        {/* oneTea.data.name */}
      <h3>Benefits:</h3>
        <p>Display the super powers from drinking this</p>
        {/* oneTea.data.benefits */}
      <h3>Type:</h3>
        <p>Oooo gurl, what's yo type?</p>
        {/* oneTea.data.type */}
      <h3>Description:</h3>
        <p>In a far off place, in a bush from a land, came the tea leaf and a description.</p>
        {/* oneTea.data.description */}
    </div>
  )
}

export default OneTea
