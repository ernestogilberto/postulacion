import React from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';

const AlbumInfo = ({data}) => {

  return (
      <div>
        <h1>Discography: </h1>
        <div className="gallery">
        {data.map((album, index) => <AlbumCard key={index} {...album}> </AlbumCard>)}
        </div>
      </div>
  )
}

export default AlbumInfo;