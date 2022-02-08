import React, {useEffect} from 'react';
import './InfoContainer.css'
import {getData} from '../../utils/fetchData';
import ArtistInfo from '../ArtistInfo/ArtistInfo';

const InfoContainer = ({id}) => {
  const [data, setData] = React.useState(null)

  useEffect(() => {
    const dataQuery = {dataType: 'artist', query: 'i', id}
    id < 0 ? setData(null) : getData(dataQuery).then(r => setData(r.artists[0]))
  }, [id]);

  return (
      <div className="info-container">
        {!data ? <h1>Search for your favorite artist / band</h1> : <ArtistInfo data={data}> </ArtistInfo>}
      </div>
  )
}

export default InfoContainer;