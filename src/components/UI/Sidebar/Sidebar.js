import React, { useState } from 'react';

import './Sidebar.scss'
import logo from '../../../assets/images/logo2.png'
import plus from '../../../assets/images/plus.png'

import Modal from '../Modal/Modal'

const Sidebar = () => {
  const [state, setState] = useState({
    currentPlaylist: 'home',
    showModal: false,
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
        <img className="Sidebar__newplaylist__img" src={plus} alt="plus" onClick={() => setState({...state, showModal: true})}/>
        <span className="Sidebar__newplaylist__title">New playlist</span>
        <Modal show={state.showModal} close={() => setState({...state, showModal: false})}>
          11234312
        </Modal>
      </div>
    </div>
  )
}

export default Sidebar
