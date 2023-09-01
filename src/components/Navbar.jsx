import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <p className='logo'>Rock Paper Scissor</p>
      <p className='name'><FontAwesomeIcon icon={ faUser }></FontAwesomeIcon> Sameera</p>
    </div>
    </>
    
  )
}
