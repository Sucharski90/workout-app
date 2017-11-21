
import React from 'react';

import { Link } from 'react-router-dom';

function Header(props){
  return (
    <header>
      <div className="logo"><img alt="" height="150" src="https://lh3.googleusercontent.com/oz_OOHZBFCjRn3g1Gpom5SgkDNLj1c_TG6Q9ToqP7m6SkKYt0ebGB0LyCvsuthLnyjQ=w300" /></div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/routine">Add Routine</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
