import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li><Link to="/" id="visit">Login</Link></li>
                <li><Link to="/register" id="visit">Register</Link></li>
                <li><Link to="/products" id="visit">Products</Link></li>
            </ul>

        </nav>
    );
}
 
export default Navbar;