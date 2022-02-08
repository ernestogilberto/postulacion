import React, {useEffect} from 'react';
import {getData} from '../../utils/fetchData';
import TracksList from '../TracksList/TracksList';

const TracksListContainer = ({id}) => {

  const [data, setData] = React.useState(null)

  useEffect(() => {
    const dataQuery = {dataType : 'track', query : 'm', id}
    id < 0 ? setData(null) : getData(dataQuery).then(r => setData(r.track))
  }, [id]);

  return (
      <div>
        {!data ? <h1>Not Found</h1> :  <TracksList data={data}> </TracksList>}
      </div>
  )
}

export default TracksListContainer;