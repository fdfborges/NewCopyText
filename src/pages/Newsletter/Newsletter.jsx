import React from 'react'
import './Newsletter.scss'
import AvatarNewsletter from './assets/AvatarNewsletter.png'

export const Newsletter = () => {
    return (
        <>
            <div className="ContainerNewsletterPrincipal">
                <div className="ContainerImgAndText">
                    <div className='ContainerImg'>
                        <img src={AvatarNewsletter} alt="" />
                    </div>
                    <div className='Texts'>
                        <div className="textsTop">
                            <span>INSCREVA-SE JÁ NA</span>
                            <span>NEWSLETTER</span>
                        </div>
                        <div className="textsDown">
                            <span>
                                Receba atualizações sobre a plataforma de primeira mão! Aproveite as tecnologias
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
