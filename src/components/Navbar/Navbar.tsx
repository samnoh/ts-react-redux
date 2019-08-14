import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/todos">Todos</Link>
        </div>
    );
};
