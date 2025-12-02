import './About.css';
import React from 'react';
import whatsappIcon from '../../assets/whatsapp_icon_dark.png';
import instagramIcon from '../../assets/instagram_icon_dark.png';
import locationIcon from '../../assets/location_icon_dark.png';
import ownerPicture from '../../assets/owner.png';

const About = () => {
    return (
        <div className="about-page app">
            <div className="about-section">
                <div className="about-content">
                    <div className='about-content-text'>
                        <h2>Sobre a
                            <br /><strong>Guloseimas da Lolô</strong></h2>
                        <p>
                            A Guloseimas da Lolô nasceu de um sonho simples e cheio de amor: transformar momentos especiais em sabores que abraçam. O nome veio da minha pequena, a Eloá, a nossa “Lolô”, que trouxe ainda mais doçura para a minha vida e acabou virando inspiração para cada receita que faço.
                            <br /> <br />
                            Aqui, cada bolo tem um propósito. Não é só sobre confeitar — é sobre colocar carinho em cada massa, capricho em cada recheio e muito cuidado em cada detalhe. Gosto de pensar que, quando alguém leva um doce meu pra casa, está levando também um pedacinho da nossa história e do meu amor pela confeitaria.
                            <br /> <br />
                            Meu objetivo é simples: adoçar momentos, criar memórias e fazer parte das celebrações das pessoas com aquele toque caseiro que lembra aconchego, família e abraço apertado. Tudo sempre feito com ingredientes de qualidade e com o mesmo cuidado que eu teria preparando para quem mais amo. 💕
                        </p>
                    </div>
                    <div className="about-content-img">
                        <img src={ownerPicture} alt="Confeiteira Caroline" />

                    </div>
                </div>
            </div>
            <div className="contato-section" id="contato">
                <div className="contato-content">
                    <h2>Entre em Contato</h2>
                    <div className="info-cards">
                        <a href="https://wa.me/5521979859828" target="_blank" rel="noopener noreferrer" className="info-card">
                            <img src={whatsappIcon} alt="WhatsApp icon" />
                            <p><strong>WhatsApp</strong><br />+55 21 97985-9828</p>
                        </a>
                        <a href="https://instagram.com/lolo_daguloseimas" target="_blank" rel="noopener noreferrer" className="info-card">
                            <img src={instagramIcon} alt="Instagram icon" />
                            <p><strong>Instagram</strong><br />@lolo_daguloseimas</p>
                        </a>
                        <a href="https://maps.app.goo.gl/gtZL7RtTDurVwT1PA" target="_blank" rel="noopener noreferrer" className="info-card">
                            <img src={locationIcon} alt="Location icon" />
                            <p><strong>Endereço</strong><br />Urucânia, Rio de Janeiro - RJ</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;