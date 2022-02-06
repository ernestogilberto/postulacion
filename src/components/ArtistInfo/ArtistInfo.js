import React from 'react';
import './ArtistInfo.css'
import Image from '../Image/Image';

const ArtistInfo = ({data}) => {

  return (
      <div>
        <Image data={data} > </Image>
        <h1> {data.strArtist} </h1>
        <h2>Formed Year: </h2>
        <p>{data.intFormedYear}</p>
        <h2>Country: </h2>
        <p>{data.strCountry}</p>
        <h2>Style: </h2>
        <p>{data.strStyle}</p>
        <h2>Genre: </h2>
        <p>{data.strGenre}</p>
        <h2>Members: </h2>
        <p>{data.intMembers}</p>
        <h2>Biography: </h2>
        <p>{data.strBiographyEN}</p>
      </div>
  )
}

export default ArtistInfo;