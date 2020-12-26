import React from 'react';

import './Playbar.scss'

const Playbar = () => {
  return (
    <div className="Playbar">
      <div className="Playbar__volume">
        <span className="Playbar__volume__bar"><img src={null} alt="volume bar"/></span>
        <input type="range" name="volumeBar" />
      </div>
      <div className="Playbar__controls">
        <img src={null} alt="backward button" className="Playbar__controls__backward"/>
        <img src={null} alt="play button" className="Playbar__controls__play"/>
        <img src={null} alt="forward button" className="Playbar__controls__forward"/>
      </div>
      <div className="Playbar__progressBar">
        <span>current</span>
        <input type="range" name="progressBar"/>
        <span>total</span>
      </div>
      <span className="Playbar__repeat"></span>
    </div>
  )
}

export default Playbar
