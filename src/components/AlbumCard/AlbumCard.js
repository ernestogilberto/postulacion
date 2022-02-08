import React from 'react';
import './AlbumCard.css'
import AlbumModal from '../AlbumModal/AlbumModal';

const AlbumCard = ({idAlbum, strAlbum, intYearReleased, strAlbumThumb}) => {

  const [show, setShow] = React.useState(false)

  const displayModal = () => {
    setShow(!show)
  }

  return (
      <div className="card-container">
        <img className="album-img" src={strAlbumThumb } onClick={displayModal} alt=""/>
        <h2 className="album-title">Title: </h2>
        <p className="album-data">{strAlbum}</p>
        <h2 className="album-title">Year: </h2>
        <p className="album-data">{intYearReleased}</p>
        {show && <AlbumModal id={idAlbum} displayModal={displayModal}> </AlbumModal>}
      </div>
  )
}

export default AlbumCard;