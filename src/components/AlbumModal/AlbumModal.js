import React from 'react';
import './AlbumModal.css'
import TracksListContainer from '../TracksListContainer/TracksListContainer'

const AlbumModal = ({id, displayModal}) => {
  return (
      <div className="modal-container">
        <div className="modal-content">
          <span className="close-modal" onClick={displayModal}>cerrar</span>
          <TracksListContainer id={id}> </TracksListContainer>
        </div>
      </div>
  )
}

export default AlbumModal;