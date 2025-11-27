import React from 'react'
import './Header.css'

export const Header = () => {
  
  const scrollToMenu = () => {
    const menuElement = document.getElementById('food-display');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Faça sua encomenda aqui</h2>
        <p>Venha conhecer e se apaixonar pelas nossas guloseimas, feitas com um toque caseiro especial. Tudo é preparado com muito amor para você e sua família.</p>
        <button onClick={scrollToMenu}>Ver Menu</button>
      </div>
    </div>
  )
}
