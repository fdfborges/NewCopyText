import React from 'react'
import './Navbar.scss';
import { Button } from '../Button/Button';

export const Navbar = () => {
  return (
    <nav className='NavbarContainerPrincipal'>
      <div className='LogoContainerNavbar'>
        <span>COPYTEXT</span>
      </div>
      <div>
        <ul className='NavbarUl'>
          <li><a href="#">Sobre o Dev</a></li>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div className='BtnContainerNavbar'>
        <Button
          variant='secondary'
          size='small'
          disabled='true' //Não funcionou
          children={"ENTRAR"}
        />

        <Button
          variant='primary'
          size='medium'
          disabled='true' //Não funcionou
          children={"REGISTRE-SE"}
        />


      </div>
    </nav>
  )
}


