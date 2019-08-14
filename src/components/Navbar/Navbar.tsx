import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink exact to="/" activeClassName="navbar-active">
                Home
            </NavLink>
            <NavLink to="/todos" activeClassName="navbar-active">
                Todos
            </NavLink>
        </div>
    );
};
