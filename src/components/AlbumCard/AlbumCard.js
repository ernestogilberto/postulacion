import React from 'react';

const AlbumCard = ({idAlbum, strAlbum, intYearReleased, strLabel, strAlbumThumb}) => {
  return (
      <div>
        <img src={strAlbumThumb} alt=""/>
        <h2>Title: </h2>
        <p>{strAlbum}</p>
        <h2>Year: </h2>
        <p>{intYearReleased}</p>
        <h2>Label: </h2>
        <p>{strLabel}</p>
      </div>
  )
}

export default AlbumCard;