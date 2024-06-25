import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './Sidebar.css';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

const Sidebars = () => {
  return (
    // <div className="sidebar">
    //   <div className="logo">
    //     <h2 className='admin-side'>Admin</h2>
    //   </div>
    //   <ul className="sidebar-menu">
    //     {/* Use Link to create navigation links */}
    //     <li className="menu-item"><Link to="/">Home</Link></li>
    //     <li className="menu-item"><Link to="/selected-candidates">Selected Candidates</Link></li>
    //     <li className="menu-item"><Link to="/contact">Contact</Link></li>
    //     <li className="menu-item"><Link to="/about">About</Link></li>
    //   </ul>
    // </div>

    <Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu itemt
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/" />}> Home</MenuItem>
    <MenuItem component={<Link to="/selected"  />}> Selected</MenuItem>
    <MenuItem component={<Link to="/contact" />}>Contact</MenuItem>
    <MenuItem component={<Link to="/about" />}> About</MenuItem>

  </Menu>
</Sidebar>

  );
};

export default Sidebars;


