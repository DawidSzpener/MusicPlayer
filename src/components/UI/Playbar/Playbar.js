import React, { useState, useEffect } from 'react';

import './Playbar.scss'
import forward from '../../../assets/images/forward.png'
import backward from '../../../assets/images/backward.png'
import playB from '../../../assets/images/play.png'
import stopB from '../../../assets/images/stop.png'
import sound from '../../../assets/images/sound.png'

const Playbar = (props) => {
  const [playing, setPlaying] = useState(false)
  const [stateVolume, setStateVolume] = useState(0.5)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const toggle = () => {
    if (props.audio.current.paused) {
      props.audio.current.play()
    } else {
      props.audio.current.pause()
    }
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * duration) / 100;
    setCurrentTime(compute);
    props.audio.current.currentTime = compute
  }

  useEffect(() => {
    const setVolume = (n) => {
      props.audio.current.volume = n
    }
    setVolume(stateVolume)
  }, [stateVolume, props.audio])

  useEffect(() => {
    setDuration(props.audio.current.duration)
  },[props.audio.current.duration, props.audio])

  console.log(props.audio)

  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }

  return (
    <div className="Playbar">
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDuration(e.target.duration)}
      />
      <div className="Playbar__volume">
        <span className="Playbar__volume__bar"><img src={sound} alt="volume bar" className="Playbar__volume__bar__img"/></span>
        <input value={stateVolume * 100} type="range" name="volumeBar" className="Playbar__volume__bar_input" onChange={(e) => setStateVolume(e.target.value / 100)}/>
      </div>

      <div className="Playbar__controls">
        <img src={backward} alt="backward button" className="Playbar__controls__backward"/>
        <img src={playing ? stopB : playB} onClick={() => { setPlaying(playing ? 0 : 1 ); toggle()}} alt="play button" className="Playbar__controls__play"/>
        <img src={forward} alt="forward button" className="Playbar__controls__forward"/>
      </div>

      <div className="Playbar__progressBar">
        <span className="Playbar__progressBar__current">{fmtMSS(currentTime)}</span>
        <input 
          onChange={handleProgress}
          value={duration ? (currentTime * 100) / duration : 0}
          className="Playbar__progressBar__input"
          type="range"
          name="progressBar" />
        <span className="Playbar__progressBar__total">{fmtMSS(duration)}</span>
      </div>

      <span className="Playbar__repeat"></span>
    </div>
  )
}

export default Playbar
