import React, {useEffect} from 'react';
import {getData} from '../../utils/fetchData';
import VideoInfo from '../VideoInfo/VideoInfo';

const VideosInfoContainer = ({id}) => {
  const [data, setData] = React.useState(null)

  useEffect(() => {
    const dataQuery = {dataType: 'mvid', query: 'i', id}
    id < 0 ? setData(null) : getData(dataQuery).then(r => setData(r.mvids))
  }, [id]);

  return (
      <div className="info-container">
        {!data ? <h1>Search for your favorite artist / band</h1> : <VideoInfo data={data}> </VideoInfo>}
      </div>
  )
}

export default VideosInfoContainer;