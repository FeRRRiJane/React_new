import React from 'react';
import {Link} from 'react-router-dom'
import header from '../Header/header.css'
import container from '../../App.css'


function Header() {
  return (
    <div className='container'>
    <div className="Header">
    <img></img>
      <button className='Header__button'><Link to="/page2">Начать!</Link></button>
    </div>
    </div>
  );
}

export default Header;
