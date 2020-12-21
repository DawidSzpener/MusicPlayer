import React from 'react';

import './Sidebar.scss'

const Sidebar = ({ children }) => {
  return (
    <div className="Sidebar">
      {children}
    </div>
  )
}

export default Sidebar
