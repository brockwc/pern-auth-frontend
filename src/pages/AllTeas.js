import React from 'react'

function AllTeas() {
  return (
    <div>
      <h1>Here's all of our teas</h1>
      <p>Clicking on the button below should replicate a user clicking on a benefit they would like from a tea.</p>
      <form action="/onetea">
        <button type = "submit">Here's a tea you like</button>
      </form>
    </div>
  )
}

export default AllTeas
