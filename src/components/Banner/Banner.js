import React from 'react';
import './Banner.css'

const Banner = ({data}) => {
  return (
      <div>
        <img src={data.strArtistBanner} alt="" className="banner"/>
      </div>
  )
}

export default Banner;