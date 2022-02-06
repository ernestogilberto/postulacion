import React from 'react';
import './Search.css'
import {getArtist} from '../../utils/fetchData';

const Search = ({setCurrentId}) => {

  const submitHandler = async (e) => {
    e.preventDefault()
    const search = e.target[0].value
    let artist = await getArtist(search).then(r => r.artists)
    artist === null ? setCurrentId(null) : setCurrentId(artist[0].idArtist)
    e.target[0].value = ""
  }

  return (
      <form className="search-container" name='search' onSubmit={submitHandler}>
        <input className="search" placeholder="Search artist or band" name="artist"/>
        <input className="search-btn" type="submit" value="Search"/>
      </form>
  )
}

export default Search;