import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Veja nosso cardápio</h1>
        <p className='explore-menu-text'>Escolha entre uma deliciosa variedade de bolos, tortas e doces artesanais, feitos com os melhores ingredientes e muito amor! Nossa missão é adoçar seus momentos e tornar cada ocasião inesquecível com nossas guloseimas.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu