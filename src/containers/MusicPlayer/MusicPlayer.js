import React, { useReducer, createContext, useRef } from 'react';

import Topbar from '../../components/UI/Topbar/Topbar'
import Sidebar from '../../components/UI/Sidebar/Sidebar'
import Content from '../../components/UI/Content/Content'
import Playbar from '../../components/UI/Playbar/Playbar'

import './MusicPlayer.scss'
import './input.scss'
import media from '../../media.json'
import song from '../../assets/dist/A New Orleans Crawfish Boil - Unicorn Heads.mp3'

export const StoreContext = createContext(null)

const DEFAULT_PLAYLIST = 'home'

const initialState = {
  media,
  currentPlaylist: DEFAULT_PLAYLIST,
  playlists: {
    home: new Set(media.ids),
    favorites: new Set()
  },
}

const reducer = (state, action) => {
  switch(action.type) {
    case('ADD_PLAYLIST'):
      return {...state, playlists: {...state.playlists, [action.playlist]: new Set()}}
    case('SET_PLAYLIST'):
      return {...state, currentPlaylist: action.playlist}
    case('ADD_FAVORITE'):
      state.playlists.favorites.add(action.songId)
      return {...state}
    case('REMOVE_FAVORITE'):
      state.playlists.favorites.delete(action.songId)
      return {...state}
    default:
      return null
  }
}

const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const audio = useRef('audio_tag')

  const toggle = () => {
    if (audio.current.paused) {
      audio.current.play()
    } else {
      audio.current.pause()
    }
  }

  const setVolume = (n) => {
    audio.current.volume = n
  }

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className="MusicPlayer">
        <audio ref={audio} type="audio/mpeg" src={song}/>
        <Topbar></Topbar>
        <Sidebar />
        <Content />
        <Playbar toggle={toggle} setVolume={setVolume}/>
      </div>
    </StoreContext.Provider>
  )
}

export default MusicPlayer
