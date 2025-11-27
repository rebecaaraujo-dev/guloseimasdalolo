import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo_circle} alt="" className="footer-logo" />
                </div>
                <div className="footer-content-center">
                    <p>Venha se apaixonar por nossas guloseimas!</p>
                    <div className="footer-social-icons">
                        <a href="https://wa.me/5521979859828"><img src={assets.whatsapp_icon} alt="Ícone WhatsApp"/></a>
                        <a href="https://www.instagram.com/lolo_daguloseimas/"><img src={assets.instagram_icon} alt="Ícone Instagram"/></a>
                    </div>
                </div>
                <div className="footer-content-right">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>Sobre Nós</Link></li>
                        <li><a href='https://www.ifood.com.br/' target="_blank" rel="noopener noreferrer">ifood</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copiright 2024 © GuloseimasDaLolo.com - Todos os Direitos Reservados</p>
        </div>
  )
}

export default Footer