import React from 'react';

import Topbar from '../../components/UI/Topbar/Topbar'
import Sidebar from '../../components/UI/Sidebar/Sidebar'
import Content from '../../components/UI/Content/Content'
import Playbar from '../../components/UI/Playbar/Playbar'
import './MusicPlayer.scss'

const MusicPlayer = () => {
  return (
    <div className="MusicPlayer">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      <Content></Content>
      <Playbar></Playbar>
    </div>
  )
}

export default MusicPlayer
