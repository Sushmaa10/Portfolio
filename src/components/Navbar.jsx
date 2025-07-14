import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
const location = useLocation();

return (
<nav className="navbar">
<div className="nav-links">
<Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#projects">Projects</a>
<Link to="/tech" className={location.pathname === '/tech' ? 'active' : ''}>Tech</Link>
</div>
</nav>
);
};

export default Navbar;