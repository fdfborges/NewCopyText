import React from 'react'
import './Home.scss';
import { Button } from '../Components/Button/Button';
import PersonAvatar from './assets/PersonAvatar.svg';
import { Recommendations } from '../Components/Recommendations/Recommendations';

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
                        <img className='PersonAvatar' draggable='false' src={PersonAvatar} alt="" />
                    </div>
                </div>
                <Recommendations />

            </div>
        </>
    )
}
