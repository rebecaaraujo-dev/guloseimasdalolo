import React, { useState } from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Menu = () => {
  const [category, setCategory] = useState("All")

  return (
    <div className='menu-page'>
      <div className='menu' id='menu'>
        <h1>Veja nosso cardápio</h1>
        <p className='menu-text'>Escolha entre uma deliciosa variedade de bolos, tortas e doces artesanais, feitos com os melhores ingredientes e muito amor! Nossa missão é adoçar seus momentos e tornar cada ocasião inesquecível com nossas guloseimas.</p>
        <div className='menu-list'>
          {menu_list.map((item, index) => {
            return (
              <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='menu-list-item'>
                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} />
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr />
      </div>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Menu
