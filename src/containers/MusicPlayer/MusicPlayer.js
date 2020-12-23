import React, { useReducer, createContext } from 'react';

import Topbar from '../../components/UI/Topbar/Topbar'
import Sidebar from '../../components/UI/Sidebar/Sidebar'
import Content from '../../components/UI/Content/Content'
import Playbar from '../../components/UI/Playbar/Playbar'
import './MusicPlayer.scss'

export const StoreContext = createContext(null)

const DEFAULT_PLAYLIST = 'home'

const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  playlists: {
    home: new Set(),
    favourites: new Set()
  },
}

const reducer = (state, action) => {
  switch(action.type) {
    case('ADD_PLAYLIST'):
      return {...state, playlists: {...state.playlists, [action.playlist]: new Set()}}
    case('SET_PLAYLIST'):
      return {...state, currentPlaylist: action.playlist}
    default:
      return null
  }
}

const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className="MusicPlayer">
        <Topbar></Topbar>
        <Sidebar></Sidebar>
        <Content></Content>
        <Playbar></Playbar>
      </div>
    </StoreContext.Provider>
  )
}

export default MusicPlayer
