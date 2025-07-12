import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



const Navbar = () => {
  return (
    <div>

        <nav className='navbar'>
            <div className="brand-name">
                <Link to="/"  id='brand-name'>FilmFlux</Link>
            </div>

            <div className="nav-links">
                <Link to="/" className='links'>Home</Link>
                <Link to="/favorite" className='links'>Favorites</Link>
            </div>
            
        </nav>      
    </div>
  )
}

export default Navbar
