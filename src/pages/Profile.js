import React from 'react';

const Profile = props => {
  return (
    <div>
      <h1>Profile of user with ID { props.currentUser }</h1>
      
      <h3>What did you need?</h3>
        <p>Here is your list of saved benefits</p>
        <ul>
          <li>Hey You!</li>
          <li>Create a list</li>
          <li>Of the user's saved benefits!</li>
        </ul>

      <h3>Have you steeped these?</h3>
        <p>Here's a list of random teas with your selected benefits</p>
        <ul>
          <li>This is a stretch goal</li>
          <li>But it would be cool</li>
          <li>To display random teas</li>
          <li>That have been selected by the user</li>
        </ul>

      <h3>Relax with your favorites</h3>
        <p>Here's a list of your favorite teas</p>
        <ul>
          <li>This is also a stretch goal</li>
          <li>This would display</li>
          <li>The user's favorite teas</li>
          <li>Going from newest to oldest</li>
        </ul>
    </div>
    
  )
}

export default Profile