import React from 'react';
// import logo from '../hotel_logo.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

/*THIS WORKS FOR LOCAL IMG TOO <img src={window.location.origin + '/yourPathHere.jpg'} /> */
const Navbar = () => {

    return (
      <>
        <nav className="nav">
        <Link to="/" className="site-title" >
        Hotel Azure
        <img src={process.env.PUBLIC_URL+"/hotel_logo.png"} alt="logo"/>
        </Link>
        <ul className='nav_list'>
          <CustomLink to="/reservations">Reservations</CustomLink>
          <CustomLink to="/amenities">Amenities</CustomLink>
          <CustomLink to="/account" id="account_button">Account</CustomLink>
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

  