
import React, { useState, useContext } from 'react';
import '../Popup/Popup.css';
import './SimpleItemPopup.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';


const SimpleItemPopup = ({ isOpen, onClose, item, toppings = [], showNotes = true }) => {
  const { addToCart, cartItems } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(cartItems[item._id] || 1);
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleAdd = () => setQuantity(q => q + 1);
  const handleRemove = () => setQuantity(q => (q > 1 ? q - 1 : 1));
  const handleInput = e => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0) setQuantity(val);
  };
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(item._id, { toppings, notes });
    if (onClose) {
      onClose();
      setTimeout(() => {
        navigate('/cart');
      }, 100); // Delay navigation to ensure popup closes first
    } else {
      navigate('/cart');
    }
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <img src={item.image} alt={item.name} className="popup-item-image" />
      
      <h1 className="title"><span className="title-name-emphasis">{item.name}</span></h1>
      <p className="subtitle">{item.description}</p>
      {showNotes && (
        <div className="notes-section">
          <div className="notes-label">Observações:</div>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Alguma observação especial?"
            className="notes-textarea"
          />
        </div>
      )}
      <div className="simple-item-qty-row">
        <button className="qty-btn" onClick={handleRemove}>-</button>
        <input type="number" min="1" value={quantity} onChange={handleInput} className="qty-input" />
        <button className="qty-btn" onClick={handleAdd}>+</button>
      </div>
      <div className="bottom-add-cart">
        <button className="next-add-cart" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </Popup>
  );
};

export default SimpleItemPopup;
