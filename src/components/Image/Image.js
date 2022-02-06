import React from 'react';
import './Image.css'

const Image = ({data}) => {
  return (
      <div>
        <img src={data.strArtistLogo} alt=""/>
      </div>
  )
}

export default Image;