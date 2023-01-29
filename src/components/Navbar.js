import React from 'react';
// import logo from '../hotel_logo.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

/*THIS WORKS FOR LOCAL IMG TOO <img src={window.location.origin + '/yourPathHere.jpg'} /> */
const Navbar = () => {

    return (
      <>
        <nav className="nav">
        <Link to="/">
        <img className="hotel-icon" src={process.env.PUBLIC_URL+"/hotel_logo.png"} alt="logo"/>
        </Link>
        <ul className='nav_list'>
          <CustomLink className="res-nav" to="/reservations">Reservations</CustomLink>
          <CustomLink className="amen-nav" to="/amenities">Amenities</CustomLink>
          <CustomLink className="acct-nav" to="/account" id="account_button">
          <img className="user-icon" src={process.env.PUBLIC_URL+"/user_icon.png"} alt="user"/>
          </CustomLink>
        </ul>
        </nav>
     
      </>
    )
}

export default Navbar;

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
      <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
        </Link>
      </li>
    )
  }

  