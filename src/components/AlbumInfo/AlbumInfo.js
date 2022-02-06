import React from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';

const AlbumInfo = ({data}) => {

  console.log('Entro discografia')

  return (
      <div>
        <h1>Discography: </h1>
        {data.map((album, index) => <AlbumCard key={index} {...album}> </AlbumCard>)}
      </div>
  )
}

export default AlbumInfo;