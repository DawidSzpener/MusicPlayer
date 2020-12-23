import React, { useState, useRef, useContext } from 'react';

import './Sidebar.scss'
import logo from '../../../assets/images/logo2.png'
import plus from '../../../assets/images/plus.png'

import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import Toast from '../Toast/Toast'
import {StoreContext} from '../../../containers/MusicPlayer/MusicPlayer'

const Sidebar = () => {
  const [sidebarState, setState] = useState({
    showModal: false,
    showToast: false
  })

  const { state, dispatch } = useContext(StoreContext)

  const playlists = Object.keys(state.playlists)
  const playlistRef = useRef(null)

  const addPlaylist = (event) => {
    event.preventDefault()
    const list = playlistRef.current.value

    dispatch({ type: 'ADD_PLAYLIST', playlist: list })

    setState({
      ...state, 
      showModal: false,
      showToast: true
    })
  }

  const handleModal = () => {
    setState({...sidebarState, showModal: true})
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
                dispatch({ type: 'SET_PLAYLIST', playlist: list})
              }}>
              {list}
            </li>)
        }
      </ul>
      <div className="Sidebar__newplaylist">
        <img className="Sidebar__newplaylist__img" src={plus} alt="plus" onClick={handleModal}/>
        <span className="Sidebar__newplaylist__title">New playlist</span>
        <Modal show={sidebarState.showModal} close={() => setState({...sidebarState, showModal: false})}>
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
        <Toast close={() => setState({...sidebarState, showToast: false})} show={sidebarState.showToast} text="Succesfully added"/>
      </div>
    </div>
  )
}

export default Sidebar
