import React from 'react'
import './Footer.scss'
import { Logo } from '../Logo/Logo';
import '../Logo/Logo.scss'
import { Button } from '../Button/Button';
import '../Button/Button.scss'

export const Footer = () => {
    return (
        <>
            <div className="ContainerNavPrincipal">
                <div className="ContainerLeftAndRight">
                    <div className='ContainerNavLeft'>
                        <div className="ContainerNavLeft_Logo">
                            <Logo 
                            variant={"white"}/>
                        </div>
                        <div className="ContainernavLeft_Links">
                            <ul>
                                <li><a href="#">Sobre o Dev😎</a></li>
                                <li><a href="#">Newsletter</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Repositório</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='ContainerNavRight'>
                        <span>Inscreva-se para receber atualizações 😍</span>
                        <form action="">
                            <input type="email" placeholder='Digite seu melhor e-mail' />
                            <Button
                                children={"Inscreva-se"}
                                variant='secondary'
                                size="medium" />
                        </form>
                        <span>Ao se inscrever você concorda com os termos de privacidade <br /><a href="#">Privacy Policy</a></span>
                    </div>
                </div>
                <hr />
                <div className="FooterOfFooter">
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookies Settings</a></li>
                    </ul>
                    <a className='AllRights'>© 2023 Relume. All rights reserved.</a>
                </div>
            </div>
        </>
    )
}
