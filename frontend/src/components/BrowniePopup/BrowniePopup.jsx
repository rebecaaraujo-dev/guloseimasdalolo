import React, { useState, useContext } from 'react';
import '../Popup/Popup.css';
import './BrowniePopup.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import Popup from '../Popup/Popup';

const BrowniePopup = ({ isOpen, onClose, item }) => {
  const [selectedUnits, setSelectedUnits] = useState('');
  const [notes, setNotes] = useState('');
  const { addToCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const unitOptions = [15, 30, 50, 100];
  const unitaryPrice = 5;

  const calculatePrice = (units) => {
    return (unitaryPrice * units).toFixed(2);
  };

  const handleAddToCart = () => {
    if (selectedUnits) {
      const totalPrice = unitaryPrice * selectedUnits;
      addToCart(item._id, { units: selectedUnits, totalPrice, notes });
      navigate('/cart');
      if (onClose) onClose();
    }
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <img src={item.image} alt={item.name} className="popup-item-image" />
      <h1 className="title"><span className="title-name-emphasis">{item.name}</span></h1>
      <p className="subtitle">{item.description}</p>
      
      <div className="units-section">
        <div className="units-label">Escolha a quantidade (unidades):</div>
        <div className="units-options">
          {unitOptions.map(unit => (
            <div key={unit} className="unit-option-wrapper">
              <button
                className={`unit-option ${selectedUnits === unit ? 'selected' : ''}`}
                onClick={() => setSelectedUnits(unit)}
              >
                {unit}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedUnits && (
        <div className="price-summary">
          <p><strong>R${calculatePrice(selectedUnits)}</strong></p>
        </div>
      )}

      <div className="notes-section">
        <div className="notes-label">Observações:</div>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Alguma observação especial?"
          className="notes-textarea"
        />
      </div>

      <div className="bottom-add-cart">
        <button 
          className="next-add-cart" 
          onClick={handleAddToCart}
          disabled={!selectedUnits}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </Popup>
  );
};

export default BrowniePopup;
