import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

import BuildYourCake from '../BuildYourCake/BuildYourCake'
import PavePopup from '../PavePopUp/PavePopup'


const FoodItem = ({id,name,price,description,image,category}) => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  const [isPopupOpen, setIsPopupOpen] = useState(false)


  const handleClick = (e) => {
    e.stopPropagation();
    if (category === 'Bolos' || (id === "10" && name === "Pavê")) {
      setIsPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {category === 'Bolos' && (
        <BuildYourCake isOpen={isPopupOpen} onClose={handleClosePopup} cakeName={name} />
      )}
      {id === "10" && name === "Pavê" && (
        <PavePopup isOpen={isPopupOpen} onClose={handleClosePopup} paveName={name} />
      )}
      <div className='food-item' onClick={handleClick}>
        <div className="food-item-img-container">
          <img className='food-item-image' src={image} alt="" />
          {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
            :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
            </div> 
          }
        </div>
        <div className="food-item-info">
          <div className="food-item-name">
            <p>{name}</p>
          </div>
          <p className="food-item-description">{description}</p>
          <div className="food-item-price">
            <p className="food-item-price-text">A partir de</p>
            <p className="food-item-price-number">R${price}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodItem