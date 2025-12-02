
import React, { useState, useContext } from 'react';
import '../Popup/Popup.css';
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
    <Popup isOpen={isOpen} onClose={onClose} contentClass="popup-content-pave">
      <img src={item.image} alt={item.name} className="popup-item-image" />
      <h1 className="title"><span className="cake-name-emphasis">{item.name}</span></h1>
      <p className="subtitle">Escolha o sabor:</p>
      <div className="options options-centered">
        {['tradicional', 'pêssego', 'morango'].map(option => (
          <div
            key={option}
            className={`option option-interactive${selectedOption === option ? ' selected' : ''}`}
            onClick={() => setSelectedOption(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </div>
        ))}
      </div>
      <div className="bottom">
        <button className="next" onClick={handleAddToCart} disabled={!selectedOption}>
          Adicionar ao Carrinho
        </button>
      </div>
    </Popup>
  );
};

export default PavePopup;
