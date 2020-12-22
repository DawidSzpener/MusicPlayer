import React from 'react';

import './Modal.scss'
import closeX from '../../../assets/images/X.png'

const Modal = ({ children, show, close }) => {
  if(!show) return null

  return (
    <div className="Modal">
        <div className="Modal__content">
        <img className="Modal__closeX" alt="X" src={closeX} onClick={close}/>
        {children}
        </div>
    </div>
  )
}

export default Modal
