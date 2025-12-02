import './About.css';
import React from 'react';
import whatsappIcon from '../../assets/whatsapp-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import locationIcon from '../../assets/location-icon.svg';
import ownerPicture from '../../assets/owner.png';

const About = () => {
    return (
        <div className="about-page app">
            <div className="about-section">
                <div className="about-content">
                    <h2>Sobre a Guloseimas da Lolô</h2>
                    <p>
                        A Guloseimas da Lolô nasceu do amor de família, da doçura de quem acredita que cada bolo deve carregar afeto, história e sabor. O nome “Lolô” vem da filhinha da chefe confeiteira, um pedacinho de doçura que virou inspiração para cada receita. É com esse cuidado e esse significado especial que dedicamos tempo e carinho em cada massa, em cada recheio, em cada detalhe.<br />
                        <br />
                        Para nós, fazer doces não é só questão de confeitaria — é expressão de amor, laços familiares e cuidado com quem vai receber nosso bolo. Mais do que entregar um doce, queremos entregar um pedacinho de aconchego, lembranças gostosas e celebrações cheias de sentimento.<br />
                        <br />
                        Nossa missão é adoçar momentos especiais e dar vida a sonhos em forma de massas fofinhas e recheios caprichados, sempre com ingredientes selecionados e o toque caseiro que conquista corações.💕
                    </p>
                    <img src={ownerPicture} alt="Confeiteira Caroline" />
                </div>
            </div>
            <div className="contato-section" id="contato">
                <div className="contato-content">
                    <h2>Contato</h2>
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