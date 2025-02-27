import React from 'react'
import '../Card/Card.scss';
import IconLixeira from './assets/IconLixeira.png'
import IconLapis from './assets/IconLapis.png'

export const Card = () => {
  return (
    <div className="CardContainer">
      <div className="TitiulodoCard">
        <button id='BtnDeleteCard'><img src={IconLixeira} alt="Botão Deletar Card" /></button>
        <input placeholder='Titulo Do Card' />
        <button id='BtnEditCard'><img src={IconLapis} alt="Botão Editar Card" /></button>
      </div>
      <textarea name="" id=""></textarea> <button id='BtnEditTextArea'><img src={IconLixeira} alt="Botão Deletar Card" /></button>
      <button>COPIAR</button>
    </div>
  )
}
