import React from 'react'
import './Home.scss';
import { Button } from '../Components/Button/Button';
import PersonAvatar from './assets/PersonAvatar.svg';
import Logo1 from './assets/LOGO1.svg';
import Logo2 from './assets/LOGO2.svg';
import Logo3 from './assets/LOGO3.svg';
import Logo4 from './assets/LOGO4.svg';
import Logo5 from './assets/LOGO5.svg';

export const Home = () => {
    return (
        <>
            <div className="ContainerPrincipalHome">
                <div className="ContaierPrincipalHomeSuperior">
                    <div className='ContainerHomePrincipalLeft'>
                        <div className="TitleAndParagraphHome">
                            <div className="TitlePageHome">
                                <h1>Copie, Cole, Edite - Simplificando sua produtividade! </h1>
                            </div>
                            <div className="SubparagraphPageHome">
                                <span>Com Copy Text, você tem o poder de copiar, colar e editar rapidamente o texto que precisa. Experimente agora e liberte-se das complicações na hora de lidar com texto!</span>
                            </div>
                        </div>
                        <div className="ButtonsPageHome">
                            <Button children={"TESTAR AGORA"} variant='primary' />
                            <Button className="BtnSaberMaisHome" children={"SABER MAIS"} variant='secondary' />

                        </div>
                    </div>
                    <div className='ContainerHomePrincipalRight'>
                        <img className='PersonAvatar' src={PersonAvatar} alt="" />
                    </div>
                </div>

                <div className="ContainerPrincipalRecomendacoes">
                    <div className='RecomendacoesTitle'><span>Nomes que usam a CopyText <br />para melhorar a <br />produtividade</span></div>
                    <div className='RecomendacoesLogo'>
                        <img src={Logo1} alt="" />
                        <img src={Logo2} alt="" />
                        <img src={Logo3} alt="" />
                        <img src={Logo4} alt="" />
                        <img src={Logo5} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
