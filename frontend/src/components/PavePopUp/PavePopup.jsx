
import React, { useState, useContext } from 'react';
import '../Popup/Popup.css';
import './PavePopup.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import Popup from '../Popup/Popup';


const PavePopup = ({ isOpen, onClose, item }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const { addCustomCakeToCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addCustomCakeToCart({
      name: item.name,
      type: selectedOption || 'tradicional',
      isPave: true,
      image: item.image
    });
    navigate('/cart');
    if (onClose) onClose();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} contentClass="popup-content">
      <img src={item.image} alt={item.name} className="popup-item-image" />
      <h1 className="title-name-emphasis">{item.name}</h1>
      <p className="flavor-label">Escolha o sabor:</p>
      <div className="flavors-options">
        {['tradicional', 'pêssego', 'morango'].map(option => (
          <div
            key={option}
            className={`flavor-option${selectedOption === option ? ' selected' : ''}`}
            onClick={() => setSelectedOption(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </div>
        ))}
      </div>
      <div className="bottom-add-cart">
        <button className="next-add-cart" onClick={handleAddToCart} disabled={!selectedOption}>
          Adicionar ao Carrinho
        </button>
      </div>
    </Popup>
  );
};

export default PavePopup;
