import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="nav">
        <Link to="/" className="site-title">
        Home
          </Link>
        <ul>
          <CustomLink to="/reservations">Reservations</CustomLink>
          <CustomLink to="/amenities">Amenities</CustomLink>
        </ul>
        </nav>
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

  