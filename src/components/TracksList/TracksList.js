import React from 'react';
import TrackItem from '../TrackItem/TrackItem';
import './TrackList.css'

const TracksList = ({data}) => {
  return (
      <div className="tracks-list">
        <h1 className="modal-title">Songs: </h1>
        <ol>
          {data.map((track, index) => <TrackItem key={index} {...track}> </TrackItem>)}
        </ol>
      </div>
  )
}

export default TracksList;