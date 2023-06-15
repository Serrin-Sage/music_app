import { useState, useEffect } from "react"

const SongList = ({songList}) => {
  

  return (
    <div className="song-list-container">
        <div className="song-list-content">
            {songList.map((song) => {
                return (
                    <div className="song-card">
                        <div className="album-placeholder"></div>
                        <div className="song-info">
                            <h2>{song.song_name}</h2>
                            <p>{song.artist}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="swiper-pagination"></div>
    </div>
  )
}

export default SongList