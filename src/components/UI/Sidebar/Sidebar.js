import React from 'react';

import './Sidebar.scss'
import logo from '../../../assets/images/logo2.png'

const Sidebar = ({ children }) => {
  return (
    <div className="Sidebar">
      <img src={logo} alt="logo" className="Sidebar__logo"/>
      {children}
    </div>
  )
}

export default Sidebar
