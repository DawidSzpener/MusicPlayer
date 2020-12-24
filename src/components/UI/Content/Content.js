import React, { useContext } from 'react';

import './Content.scss'
import {StoreContext} from '../../../containers/MusicPlayer/MusicPlayer'

const Content = () => {
  const { state } = useContext(StoreContext)
  const currentPlaylist = state.currentPlaylist
  const songIds = Array.from(state.playlists[currentPlaylist])

  return (
    <div className="Content">
      <div className="Content__title">{currentPlaylist}</div>
      {songIds.length <= 0 ? (
        <p>Your playlist is empty</p>
      ) : (
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Artist</td>
              <td>Length</td>
            </tr>
          </thead>

          <tbody>
            {songIds.map(id => {
              const { title, artist, length } = state.media[id]

              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{artist}</td>
                  <td>{length}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Content
