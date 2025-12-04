import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo_circle} alt="" className="footer-logo" />
                </div>
                <div className="footer-content-center">
                    <p>Mais do que confeitaria, somos afeto em forma de sabor.</p>
                <div className="footer-social-icons">
                    <div>
                        <a href="https://wa.me/5521979859828"><img src={assets.whatsapp_icon} alt="Ícone WhatsApp" /></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/lolo_daguloseimas/"><img src={assets.instagram_icon} alt="Ícone Instagram" /></a>
                    </div>
                </div>
                </div>
                <div className="footer-content-right">
                    <div className='footer-links'>
                        <ul>
                            <li>Home</li>
                            <li>Sobre Nós</li>
                            <li>Delivery</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copiright 2025 © guloseimasdalolo.com.br - Todos os Direitos Reservados</p>
        </div>
    )
}

export default Footer