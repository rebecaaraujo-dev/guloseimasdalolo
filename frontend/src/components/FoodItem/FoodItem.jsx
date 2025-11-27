import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,description,image,category}) => {

  const {cartItems,addToCart,removeFromCart,setCartItemQuantity} = useContext(StoreContext)
  const navigate = useNavigate()
  const [showPopup, setShowPopup] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleClick = (e) => {
    if (category === "Bolos") {
      e.stopPropagation();
      navigate('/build-your-cake',{state: {name,image,id}});
    } else {
      e.stopPropagation();
      setShowPopup(true);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(id);
    setShowPopup(false);
  };

  const handleClosePopup = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === '' || !isNaN(value)) {
      setCartItemQuantity(id, value === '' ? 0 : parseInt(value));
    }
  };

  const handleQuantityBlur = () => {
    if (inputValue === '' || parseInt(inputValue) < 0) {
      setCartItemQuantity(id, 0);
      setInputValue('0');
    }
  };

  return (
    <>
      <div className='food-item' onClick={handleClick} style={{cursor: 'pointer'}}>
          <div className="food-item-img-container">
              <img className='food-item-image' src={image} alt="" />
              {!cartItems[id]
                ?<img className='add' onClick={(e)=>{e.stopPropagation(); addToCart(id)}} src={assets.add_icon_white} alt=""/>
                :<div className='food-item-counter' onClick={(e)=>e.stopPropagation()}>
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
              {category === "Bolos" ? (
                <button className="food-item-add-cart-btn" onClick={(e) => {e.stopPropagation(); navigate('/build-your-cake',{state: {name,image,id}});}}>
                  Escolher sabores
                </button>
              ) : (
                <button className="food-item-add-cart-btn" onClick={(e) => {e.stopPropagation(); setShowPopup(true);}}>
                  Adicionar ao Carrinho
                </button>
              )}
          </div>
      </div>

      {showPopup && (
        <div className="food-item-popup-overlay" onClick={handleClosePopup}>
          <div className="food-item-popup" onClick={(e) => e.stopPropagation()}>
            <img className="food-item-popup-close" src={assets.cross_icon} alt="Close" onClick={handleClosePopup} />
            <img className="food-item-popup-image" src={image} alt={name} />
            <div className="food-item-popup-info">
              <h2>{name}</h2>
              <p className="food-item-popup-description">{description}</p>
              
              <div className="food-item-popup-quantity">
                <p>Quantidade:</p>
                <div className='food-item-popup-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                  <input 
                    type="text" 
                    value={inputValue || cartItems[id] || 0}
                    onChange={handleQuantityChange}
                    onBlur={handleQuantityBlur}
                    onFocus={(e) => setInputValue(e.target.value)}
                    className="food-item-popup-input"
                  />
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
                </div>
              </div>

              <button className="food-item-popup-add-btn" onClick={handleClosePopup}>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FoodItem