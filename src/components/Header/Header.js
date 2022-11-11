import React from "react"
import './header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__title">
                        <img src={Logo} alt=""/>
                    </h1>
                    <ul className="header__menu">
                        <li className="header__item">Home</li>
                        <li className="header__item">Portfolio</li>
                        <li className="header__item">Contacts</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;