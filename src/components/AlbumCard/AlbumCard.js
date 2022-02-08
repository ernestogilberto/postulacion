import React from 'react';
import './AlbumCard.css'

const AlbumCard = ({idAlbum, strAlbum, intYearReleased, strLabel, strAlbumThumb}) => {
  return (
      <div className="card-container">
        <img src={strAlbumThumb} alt=""/>
        <h2 className="album-title">Title: </h2>
        <p className="album-data">{strAlbum}</p>
        <h2 className="album-title">Year: </h2>
        <p className="album-data">{intYearReleased}</p>
      </div>
  )
}

export default AlbumCard;