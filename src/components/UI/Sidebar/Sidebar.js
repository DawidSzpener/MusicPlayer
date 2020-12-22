import React, { useState } from 'react';

import './Sidebar.scss'
import logo from '../../../assets/images/logo2.png'
import plus from '../../../assets/images/plus.png'

const Sidebar = () => {
  const [state, setState] = useState({
    currentPlaylist: 'home',
    playlists: {
      home: null,
      hiphop: null,
      rock: null,
      drums: null,
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
        <img className="Sidebar__newplaylist__img" src={plus} alt="plus"/>
    <span className="Sidebar__newplaylist__title">New playlist</span>
      </div>
    </div>
  )
}

export default Sidebar
