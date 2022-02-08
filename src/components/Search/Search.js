import React from 'react';
import './Search.css'
import {getData} from '../../utils/fetchData';

const Search = ({setCurrentId}) => {

  const submitHandler = async (e) => {
    e.preventDefault()
    let search = e.target[0].value
    if (search === '') search = 0;
    const data = {dataType: 'search', query: 's', id: search}
    let artist = await getData(data).then(r => r.artists)
    artist === null ? setCurrentId(null) : setCurrentId(artist[0].idArtist)
    e.target[0].value = ''
  }

  return (
      <form className="search-container" name="search" onSubmit={submitHandler}>
        <input className="search" placeholder="Search" name="artist"/>
        <input className="search-btn" type="submit" value="Search"/>
      </form>
  )
}

export default Search;