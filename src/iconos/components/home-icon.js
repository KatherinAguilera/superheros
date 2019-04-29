import React from 'react';
import home from '../../../images/iconos/icon.svg';
import './home-icon.css';
import { Link } from 'react-router-dom';

function IconHome(props) {
  return (
    <div className="IconHome">
    <Link to="/">
      <img
        src={home}
        width="70"
        height="70"
      />
      </Link>
    </div>
  )
}

export default IconHome