import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-container'>
            <img src={logo} alt="Logo" />
            <div className="nav-item">
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;