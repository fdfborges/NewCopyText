import React from 'react'
import './Filters.scss';
import IconFunel from './assets/IconFunel.svg'
import IconOrder from './assets/IconOrder.svg'

export const Filters = ({
    ImgIconSelect,
    children
}) => {

    return (
        <>
            <div className='ContainerSelectFiltersPrincipal'>
                <img src={ImgIconSelect} alt="" />
                <select className='ContainerSelectFilter' name="SelectTrilha" defaultValue={"TrilhaPadrao"} id="" >
                    <option value="TrilhaPadrao" >{children}</option>
                </select>
            </div>
        </>
    )
    
    Filters.PropTypes = {
        children: propTypes.node.isRequired,
        ImgIconSelect: PropTypes.oneOf([IconFunel, IconOrder]),
    };
}

