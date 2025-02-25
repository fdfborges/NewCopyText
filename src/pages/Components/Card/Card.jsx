import React from 'react'
import '../Card/Card.scss';

export const Card = () => {
  return (
    <div className="CardContainer">
        <div className="TitiulodoCard">
            <input placeholder='Titulo Do Card'/>
        </div>
        <textarea name="" id=""></textarea>
        <button>COPIAR</button>
    </div>
  )
}
