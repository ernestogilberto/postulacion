import React, {useEffect} from 'react';
import {getData} from '../../utils/fetchData';
import AlbumInfo from '../AlbumInfo/AlbumInfo';

const AlbumInfoContainer = ({id}) => {
  const [data, setData] = React.useState(null)

  useEffect(() => {
    const dataQuery = {dataType : 'album', query : 'i', id}
    id < 0 ? setData(null) : getData(dataQuery).then(r => setData(r.album))
  }, [id]);

  return (
      <div className="info-container">
        {!data ? <h1>Search for your favorite artist / band</h1> :  <AlbumInfo data={data}> </AlbumInfo>}
      </div>
  )
}

export default AlbumInfoContainer;