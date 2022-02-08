import React from 'react';
import './LinksContainer.css'
import LinkItem from '../LinkItem/LinkItem.js';

const links = [{text: 'Info', url: 'postulacion'},
  {text: 'Discography', url: 'postulacion/discography'},
  {text: 'Videos', url: 'postulacion/videos'},
]

const LinksContainer = () => {
  return (
      <>
        <div className="listContainer">
          {links.map((link, index) => <LinkItem key={index} text={link.text} url={link.url}/>)}
        </div>
      </>
  )
}

export default LinksContainer;