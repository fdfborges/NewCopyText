import React from 'react'
import './Functionality.scss';
import { Faixa } from '../Components/Faixa/Faixa';
import { Filters } from '../Components/Filters/Filters';
import IconFunel from '../Components/Filters/assets/IconFunel.svg';
import IconOrder from '../Components/Filters/assets/IconOrder.svg';

export const Funcionatily = () => {
  return (
    <>
      <div className="ContainerFunctionalityPrincipal">
        <div className="ContainerFiltersFuncionality">
          <Filters children={"Trilha Padrão"} ImgIconSelect={IconFunel}/>
          <Filters children={"Ordenação"} ImgIconSelect={IconOrder}/>
          <Filters children={"Tags"} ImgIconSelect={IconOrder}/>
        </div>
        <div className="ContainerFaixasPrincipal">
          <Faixa />
          <Faixa />
        </div>
      </div>
    </>
  )
}
