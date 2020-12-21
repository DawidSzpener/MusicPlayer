import React from 'react';

import './Topbar.scss'

const Topbar = ({ children }) => {
  return (
    <div className="Topbar">
      {children}
    </div>
  )
}

export default Topbar
