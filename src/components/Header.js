import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header className="header">
        <div className="home">
          <Link to={'/'}>Home!</Link>
        </div>
        <div>
          <Link to={'/dashboard'}>Dashboard</Link>
        </div>
        <div className="links">
          <ul>
            { props.currentUser ? 
              <>
                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
              </>
            :
              <>
                <li><Link to={'/register'}>Register</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
              </>
            }
          </ul>
        </div>
    </header>
  );
}

export default Header;
