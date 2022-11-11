import React from "react"
import './firstblock.css'
import Logo from '../../assets/logo2.jfif'

const FirstBlock = () => {
    return (
        <section className="dzsection">
            <div className="card">
               <img src={Logo} alt=""/>
            </div>
            <div className="dzsection__text">
                <div className="dzsection__title">Duplin Carolina Red Wine</div>
                <div className="dzsection__subtitle">Velvety Sweet</div>
            </div>
        </section>
    )
}

export default FirstBlock;