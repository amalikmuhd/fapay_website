import React from 'react'
import LogoImage from './images/logo.svg';
import './logoStyle.css'

const LogoButton = () => {
    return (
        <img src={LogoImage} alt="" className="LogoButtonImage" />
    )
}

export default LogoButton
