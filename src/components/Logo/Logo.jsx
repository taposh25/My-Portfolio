import React from 'react';
import logoImg from '../../assets/logo.png';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/">
            <img src={logoImg} alt="Logo" className="w-20 h-20 object-contain" />
        </Link>
    );
};

export default Logo;