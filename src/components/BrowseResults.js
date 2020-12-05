import React from 'react';
import Browse from '../pages/Browse';
import { Link } from 'react-router-dom'
import Router from 'react-router-dom'

const BrowseResults = (props) => {
  return (
    <div className="card flex-row flex-wrap user-info">
      <div className="card-header border-0">
        <img src='https://www.flaticon.com/premium-icon/icons/svg/2102/2102633.svg' height='180px' width='180px' alt='user icon' />
      </div>
      <div className="card-block info-card-text">
        <h4 className="card-title">{props.displayName}</h4>
        <div className="card-text">
          <p>{props.city}, {props.state}</p>
        </div>
        <Link to={'/profile/' + props.userId} className="btn pink-button info-card-button">
          View Profile</Link>
      </div>
    </div>
  )
}
export default BrowseResults;