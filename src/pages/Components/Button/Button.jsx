import React from 'react'
import './Button.scss'

export const Button = ({
    children,
    variant = "primary",
    size = "medium",
    disabled = false,
    icon,
    onClick,
    ...props
}) => {
    return (
        <button
            className={`btn ${variant} ${size}`}
            onClick={onClick}
            {...props}
        >
            {icon && <span className='btn-icon'>{icon}</span>}
            {children}
        </button>

    )
    //Tipagem do componente Botão
    Button.PropTypes = {
        children: propTypes.node.isRequired, //O que significa?
        variant: PropTypes.oneOf(["primary", "secondary", "outline", "danger"]),
        size: PropTypes.oneOf(["small", "medium", "large"]),
        icon: PropTypes.node,
        onClick: PropTypes.func,
    };

    //Definições nativas da tipagem
    Button.defaultProps = {
        variant: "primary",
        size: "medium",
        disabled: false,
        onClick: () => { },
    };

}
