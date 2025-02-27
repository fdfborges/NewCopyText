import React from 'react'

export const Logo = ({ variant }) => {
    return (
        <span className={variant}>COPYTEXT</span>
    )

    Logo.PropTypes = {
        variant: PropTypes.oneOf(["white", "black"])
    };
}
