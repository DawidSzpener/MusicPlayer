import React, { useContext } from 'react';

import './Content.scss'
import {StoreContext} from '../../../containers/MusicPlayer/MusicPlayer'

const Content = () => {
  const { state, dispatch } = useContext(StoreContext)

  return (
    <div className="Content">
      {state.currentPlaylist}
    </div>
  )
}

export default Content
