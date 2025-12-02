import React, { useState, useContext } from 'react';
import './PavePopup.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const PavePopup = ({ isOpen, onClose, paveName }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const { addCustomCakeToCart } = useContext(StoreContext);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleAddToCart = () => {
    addCustomCakeToCart({
      name: paveName,
      type: selectedOption || 'tradicional',
      isPave: true
    });
    navigate('/cart');
    if (onClose) onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content-pave">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="content">
          <h1 className="title">Monte seu <span className="cake-name-emphasis">{paveName}</span></h1>
          <p className="subtitle">Escolha o sabor do pavê:</p>
          <div className="options" style={{ justifyContent: 'center', gap: '2rem' }}>
            {['tradicional', 'pêssego', 'morango'].map(option => (
              <div
                key={option}
                className={`option${selectedOption === option ? ' selected' : ''}`}
                onClick={() => setSelectedOption(option)}
                style={{ cursor: 'pointer', minWidth: 120, textAlign: 'center' }}
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
        </div>
      </div>
    </div>
  );
};

export default PavePopup;
