import React from 'react';
import './LinksContainer.css'
import LinkItem from '../LinkItem/LinkItem.js';

const links = [{text: 'Info', url: 'postulacion'},
    {text: 'Discography', url: 'discography'},
  {text: 'Videos', url: 'videos'}
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