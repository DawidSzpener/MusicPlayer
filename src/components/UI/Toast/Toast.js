import React, { useEffect } from 'react';

import './Toast.scss'

const Toast = ({ text, show, close }) => {
  useEffect(() => {
    if(!show) return 

    const closeToast = () => {
      setTimeout(() => {
        close()
      }, 2000)
    }

    closeToast()

    return () => {
      clearTimeout(closeToast)
    }
  }, [show, close])

  if(!show) return null

  return (
    <div className="Toast">
      {text}
    </div>
  )
}

export default Toast
