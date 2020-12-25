import React, { useContext } from 'react';

import './Content.scss'
import fullHeart from '../../../assets/images/fullheart.png'
import emptyHeart from '../../../assets/images/emptyheart.png'

import {StoreContext} from '../../../containers/MusicPlayer/MusicPlayer'

const Content = () => {
  const { state, dispatch } = useContext(StoreContext)
  const currentPlaylist = state.currentPlaylist
  const songIds = Array.from(state.playlists[currentPlaylist])

  const addToFavorite = (id) => {
    dispatch({ type: 'ADD_FAVORITE', songId: id })
  }

  const removeFromFavorite = (id) => {
    dispatch({ type: 'REMOVE_FAVORITE', songId: id })
  }

  return (
    <div className="Content">
      <div className="Content__title">{currentPlaylist}</div>
      {songIds.length <= 0 ? (
        <p className="Content__title">Your playlist is empty</p>
      ) : (
        <table className="Content__table">
          <thead className="Content__table__head">
            <tr>
              <td />
              <td>Title</td>
              <td>Artist</td>
              <td>Length</td>
            </tr>
          </thead>

          <tbody>
            {songIds.map(id => {
              const { title, artist, length } = state.media[id]
              const isFavorite = state.playlists.favorites.has(id)

              return (
                <tr key={id} className="Content__table__tr">
                  {
                    isFavorite ?
                      <td className="Content__table__td__heart">
                        <img className="Content__table__td__heart__img" src={fullHeart} alt="heart" onClick={() => removeFromFavorite(id)}/>
                      </td>
                      :
                      <td className="Content__table__td__heart">
                        <img className="Content__table__td__heart__img" src={emptyHeart} alt="heart" onClick={() => addToFavorite(id)}/>
                      </td>
                  }
                  <td className="Content__table__td">{title}</td>
                  <td className="Content__table__td">{artist}</td>
                  <td className="Content__table__td" style={{paddingLeft: '23px'}}>{length}</td>
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
