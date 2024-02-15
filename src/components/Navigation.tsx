import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <p className='d-flex flex-row gap-2'>
        <NavLink to="/pages/about">About</NavLink>
        <NavLink to="/pages/about">Contacts</NavLink>
        <NavLink to="/pages/about">Admin Panel</NavLink>
      </p>
    </nav>
  );
};

export default Navigation;