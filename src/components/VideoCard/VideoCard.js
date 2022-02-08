import React from 'react';
import './VideoCard.css'
import YouTube from 'react-youtube';

const VideoCard = ({strMusicVid, strTrack}) => {
  const video = strMusicVid
  const videoId = video.substring(video.length-11, video.length)
  return (
      <div className="card-container">
        <div className="video-responsive">
          <YouTube videoId = {videoId}> </YouTube>
        </div>
        <h2 className="video-title">{strTrack}</h2>
      </div>
  )
}

export default VideoCard;