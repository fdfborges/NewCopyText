import React from 'react'
import './Faixa.scss';
import { Card } from '../Card/Card';

export const Faixa = () => {
    return (
        <>
            <div className="containerFaixalityPrincipal">
                <div className="FaixaContainer">
                    <div className="Faixa_Titulo">
                        <span>Titulo da Caixa</span>
                    </div>
                    <Card />
                </div>
            </div>
        </>
    )
}
