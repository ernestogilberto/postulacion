import React from 'react';
import './TrackItem.css'

const TrackItem = ({strTrack}) => {
  return (
        <li className="track">{strTrack}</li>
  )
}

export default TrackItem;