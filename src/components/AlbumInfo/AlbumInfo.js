import React from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
import './AlbumInfo.css'

const AlbumInfo = ({data}) => {

  return (
      <div>
        <h1>Discography: </h1>
        <p className="note">(Click on image for track list.)</p>
        <div className="gallery">
          {data.map((album, index) => <AlbumCard key={index} {...album}> </AlbumCard>)}
        </div>
      </div>
  )
}

export default AlbumInfo;