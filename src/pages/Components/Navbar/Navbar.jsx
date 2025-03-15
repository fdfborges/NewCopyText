import React from 'react'
import { useModal } from '../../Register/ContextModal';
import { useModalForLogin } from '../../Login/ContextModalForLogin'
import './Navbar.scss';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';

export const Navbar = () => {
  const { setIsOpen } = useModal();
  const { setIsOpenForLogin } = useModalForLogin();

  return (
    <nav className='NavbarContainerPrincipal'>
      <div className='LogoContainerNavbar'>
        <Logo />
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
          disabled='true'
          children={"ENTRAR"}
          onClick={() => setIsOpenForLogin(true)}
        />

        <Button
          variant='primary'
          size='medium'
          disabled='true'
          children={"REGISTRE-SE"}
          onClick={() => setIsOpen(true)}
        />


      </div>
    </nav>
  )
}


