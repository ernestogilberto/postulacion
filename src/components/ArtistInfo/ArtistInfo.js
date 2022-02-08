import React from 'react';
import './ArtistInfo.css'
import Banner from '../Banner/Banner';

const ArtistInfo = ({data}) => {

  return (
      <div>
        <Banner data={data} > </Banner>
        {/*<h1> {data.strArtist} </h1>*/}
        <div className="mainInfo-container">
          <div className="mainInfo">
            <h2>Name: </h2>
            <p>{data.strArtist}</p>
            <h2>Formed Year: </h2>
            <p>{data.intFormedYear}</p>
            <h2>Country: </h2>
            <p>{data.strCountry}</p>
          </div>

          <div className="mainInfo">
            <h2>Style: </h2>
            <p>{data.strStyle}</p>
            <h2>Genre: </h2>
            <p>{data.strGenre}</p>
            <h2>Members: </h2>
            <p>{data.intMembers}</p>
          </div>
          {/*<img src={data.strArtistCutout} alt=""/>*/}
        </div>
        <h2>Biography: </h2>
        <p>{data.strBiographyEN}</p>
      </div>
  )
}

export default ArtistInfo;