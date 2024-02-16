import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <p className='d-flex flex-row gap-2'>
        <NavLink to="/pages/home">Home</NavLink>
        <NavLink to="/pages/about">About</NavLink>
        <NavLink to="/pages/contacts">Contacts</NavLink>
        <NavLink to="/pages/price">Price</NavLink>
        <NavLink to="/pages/admin">Admin Panel</NavLink>
      </p>
    </nav>
  );
};

export default Navigation;