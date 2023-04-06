import React from 'react';

import logo from '../../images/Logo.svg'
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-img'>
                <img src={logo} alt="" />
            </div>
            <div className='header-link'>
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/orders">Order Review</ActiveLink>
                <ActiveLink to="/inventory">Manage Inventory</ActiveLink>
                <ActiveLink to="/login">Login</ActiveLink>
            </div>
        </div>
    );
};

export default Header;