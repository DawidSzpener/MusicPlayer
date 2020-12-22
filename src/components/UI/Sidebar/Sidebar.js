import React, { useState } from 'react';

import './Sidebar.scss'
import logo from '../../../assets/images/logo2.png'

const Sidebar = () => {
  const [state, setState] = useState({
    currentPlaylist: 'home',
    playlists: {
      home: null,
      favourites: null
    }
  })

  const playlists = Object.keys(state.playlists)

  return (
    <div className="Sidebar">
      <img src={logo} alt="logo" className="Sidebar__logo"/>
      <div className="Sidebar__title">LIBRARY</div>
      {
        playlists.map(list =>
          <li 
            className={list === state.currentPlaylist ? "Sidebar__li Sidebar__li--active" : "Sidebar__li"}
            key={list}
            onClick={() => {
              setState({ ...state, currentPlaylist: list})
            }}>
            {list}
          </li>)
      }
      <div className="Sidebar__newplaylist">
        <span style={{userSelect: 'none'}}>New playlist</span>
      </div>
    </div>
  )
}

export default Sidebar
