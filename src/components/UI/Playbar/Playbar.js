import React, { useState } from 'react';

import './Playbar.scss'
import forward from '../../../assets/images/forward.png'
import backward from '../../../assets/images/backward.png'
import playB from '../../../assets/images/play.png'
import stopB from '../../../assets/images/stop.png'
import sound from '../../../assets/images/sound.png'

const Playbar = (props) => {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="Playbar">

      <div className="Playbar__volume">
        <span className="Playbar__volume__bar"><img src={sound} alt="volume bar" className="Playbar__volume__bar__img"/></span>
        <input type="range" name="volumeBar" className="Playbar__volume__bar_input"/>
      </div>

      <div className="Playbar__controls">
        <img src={backward} alt="backward button" className="Playbar__controls__backward"/>
        <img src={playing ? stopB : playB} onClick={() => { setPlaying(playing ? 0 : 1 ); props.toggle()}} alt="play button" className="Playbar__controls__play"/>
        <img src={forward} alt="forward button" className="Playbar__controls__forward"/>
      </div>

      <div className="Playbar__progressBar">
        <span className="Playbar__progressBar__current">0:20</span>
        <input className="Playbar__progressBar__input" type="range" name="progressBar" />
        <span className="Playbar__progressBar__total">4:11</span>
      </div>

      <span className="Playbar__repeat"></span>
    </div>
  )
}

export default Playbar
