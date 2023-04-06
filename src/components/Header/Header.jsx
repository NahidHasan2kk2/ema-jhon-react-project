import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-img'>
                <img src={logo} alt="" />
            </div>
            <div className='header-link'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;