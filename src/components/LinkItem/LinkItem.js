import React from 'react';
import './LinkItem.css';
import {Link} from 'react-router-dom';


const LinkListItem = props => <Link to={`${props.url}`}>
  <p className="link-item">{props.text}</p>
</Link>


export default LinkListItem;