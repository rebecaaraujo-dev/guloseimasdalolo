import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


import BuildYourCake from '../BuildYourCake/BuildYourCake'
import PavePopup from '../PavePopUp/PavePopup'
import SimpleItemPopup from '../SimpleItemPopup/SimpleItemPopup'
import DocinhoPopup from '../DocinhoPopup/DocinhoPopup'
import BrowniePopup from '../BrowniePopup/BrowniePopup'


const FoodItem = ({id,name,price,description,image,category}) => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  const [isPopupOpen, setIsPopupOpen] = useState(false)


  const handleClick = (e) => {
    e.stopPropagation();
    setIsPopupOpen(true);
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
        <PavePopup isOpen={isPopupOpen} onClose={handleClosePopup} item={{id, name, price, description, image, _id: id}} />
      )}
      {category === 'Docinhos' && (
        <DocinhoPopup isOpen={isPopupOpen} onClose={handleClosePopup} item={{id, name, price, description, image, _id: id}} />
      )}
      {id === "9" && name === "Mini Brownie" && (
        <BrowniePopup isOpen={isPopupOpen} onClose={handleClosePopup} item={{id, name, price, description, image, _id: id}} />
      )}
      {category !== 'Bolos' && !(id === "10" && name === "Pavê") && category !== 'Docinhos' && !(id === "9" && name === "Mini Brownie") && (
        <SimpleItemPopup isOpen={isPopupOpen} onClose={handleClosePopup} item={{id, name, price, description, image, _id: id}} />
      )}
      <div className='food-item' onClick={handleClick}>
        <div className="food-item-img-container">
          <img className='food-item-image' src={image} alt="" />
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
          <button
            className="food-item-add-btn"
            onClick={e => {
              e.stopPropagation();
              setIsPopupOpen(true);
            }}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </>
  )
}

export default FoodItem