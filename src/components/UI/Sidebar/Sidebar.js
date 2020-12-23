import React, { useState, useRef } from 'react';

import './Sidebar.scss'
import logo from '../../../assets/images/logo2.png'
import plus from '../../../assets/images/plus.png'

import Modal from '../Modal/Modal'
import Button from '../Button/Button'

const Sidebar = () => {
  const [state, setState] = useState({
    currentPlaylist: 'home',
    showModal: false,
    playlists: {
      home: new Set(),
      hiphop: new Set(),
      rock: new Set(),
      favourites: new Set()
    }
  })

  const playlists = Object.keys(state.playlists)
  const playlistRef = useRef(null)

  const addPlaylist = (event) => {
    event.preventDefault()
    const list = playlistRef.current.value

    setState({
      ...state, 
      showModal: false,
      playlists: {...state.playlists, [list]: new Set()}
    })
  }

  return (
    <div className="Sidebar">
      <img src={logo} alt="logo" className="Sidebar__logo"/>
      <div className="Sidebar__title">LIBRARY</div>
      <ul className="Sidebar__ul">
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
      </ul>
      <div className="Sidebar__newplaylist">
        <img className="Sidebar__newplaylist__img" src={plus} alt="plus" onClick={() => setState({...state, showModal: true})}/>
        <span className="Sidebar__newplaylist__title">New playlist</span>
        <Modal show={state.showModal} close={() => setState({...state, showModal: false})}>
          <form onSubmit={addPlaylist} className="Sidebar__newplaylist__modal">
            <div className="Sidebar__newplaylist__modal__title">NEW PLAYLIST</div>
            <div className="Sidebar__newplaylist__modal__content">
              <input
                className="Sidebar__newplaylist__modal__content__input"
                type="text"
                placeholder="NAME"
                required
                ref={playlistRef}/>
            </div>
            <Button type="submit" text="CREATE" styles="black"></Button>
          </form>
        </Modal>
      </div>
    </div>
  )
}

export default Sidebar
