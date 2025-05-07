import React from 'react'
import './Recommendations.scss';

import Logo1 from './assets/LOGO1.svg';
import Logo2 from './assets/LOGO2.svg';
import Logo3 from './assets/LOGO3.svg';
import Logo4 from './assets/LOGO4.svg';
import Logo5 from './assets/LOGO5.svg';

export const Recommendations = () => {
    return (
        <div className="ContainerPrincipalRecomendacoes">
            <div className='RecomendacoesTitle'><span>Nomes que usam a CopyText<br></br>e produzem!</span></div>
            <div className='RecomendacoesLogo'>
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
            </div>
        </div>
    )
}
