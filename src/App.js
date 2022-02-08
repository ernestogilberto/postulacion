import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import InfoContainer from './components/InfoContainer/InfoContainer';
import React from 'react';
import AlbumInfoContainer from './components/AlbumInfoContainer/AlbumInfoContainer';
import VideosInfoContainer from './components/VideosInfoContainer/VideosInfoContainer';

function App() {

  const [currentId, setCurrentId] = React.useState(0)

  return (
      <>
        <NavBar/>
        <Search setCurrentId={setCurrentId}/>
        <Routes>
          <Route path="/postulacion" element={<InfoContainer dataType={'artist'} query={'i'} id={currentId}/>}/>
          <Route path="/postulacion/discography" element={<AlbumInfoContainer id={currentId}/>}/>
          <Route path="/postulacion/videos" element={<VideosInfoContainer id={currentId}/>}/>
        </Routes>
      </>


  )

}

export default App;
