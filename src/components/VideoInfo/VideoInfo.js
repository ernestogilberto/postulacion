import React from 'react';
import VideoCard from '../VideoCard/VideoCard';

const VideoInfo = ({data}) => {

  return (
      <div className="video-container">
        <h1>videos: </h1>
        {data.map((video, index) => <VideoCard key={index} {...video}> </VideoCard>)}
      </div>
  )
}

export default VideoInfo;