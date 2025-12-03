import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Popup/Popup.css';
import './BuildYourCake.css';
import { StoreContext } from '../../context/StoreContext';

const BuildYourCake = ({ isOpen, onClose, cakeName }) => {
  const displayName = cakeName || 'bolo';
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    base: null,
    filling: null,
    specialFilling: null,
    mousseFilling: null,
    compotas: null,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [notes, setNotes] = useState('');

  const handleSelection = (type, value) => {
    setSelection((prev) => ({ ...prev, [type]: value }));
    setErrorMessage('');
  };

  const handleNext = () => {
    if (
      (step === 1 && selection.base) ||
      (step === 2 && (selection.filling || selection.specialFilling || selection.mousseFilling || selection.compotas))
    ) {
      setStep((prev) => prev + 1);
    } else {
      setErrorMessage('Por favor, selecione uma opção antes de continuar.');
    }
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const { addCustomCakeToCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='select-cake-base'>
            <div className='cake-content'>
              <h1 className='title'>Monte seu <span className='cake-name-emphasis'>{displayName}</span></h1>
              <p className='subtitle'>Escolha entre Massa Simples ou Massa Especial</p>
              <div className='cake-options'>
                <div className='cake-options-column'>
                  <h2 className='cake-section-title'>Massas simples:</h2>
                  <ul>
                    <li
                      className={`cake-option ${selection.base === 'Baunilha' ? 'selected' : ''}`}
                      onClick={() => handleSelection('base', 'Baunilha')}
                    >
                      Baunilha
                    </li>
                    <li
                      className={`cake-option ${selection.base === 'Chocolate' ? 'selected' : ''}`}
                      onClick={() => handleSelection('base', 'Chocolate')}
                    >
                      Chocolate
                    </li>
                    <li
                      className={`cake-option ${selection.base === 'Natural' ? 'selected' : ''}`}
                      onClick={() => handleSelection('base', 'Natural')}
                    >
                      Natural
                    </li>
                  </ul>
                </div>
                <div className='cake-options-column'>
                  <h2 className='cake-section-title'>Massas especiais:</h2>
                  <ul>
                    <li
                      className={`cake-option ${selection.base === 'Red Velvet' ? 'selected' : ''}`}
                      onClick={() => handleSelection('base', 'Red Velvet')}
                    >
                      Red Velvet
                    </li>
                    <li
                      className={`cake-option ${selection.base === 'Formigueiro' ? 'selected' : ''}`}
                      onClick={() => handleSelection('base', 'Formigueiro')}
                    >
                      Formigueiro
                    </li>
                    <li
                      className={`cake-option ${selection.base === 'Cenoura' ? 'selected' : ''}`}
                      onClick={() => handleSelection('base', 'Cenoura')}
                    >
                      Cenoura
                    </li>
                  </ul>
                </div>
              </div>
              <div className='cake-bottom'>
                {step > 1 && <button className='cake-prev' onClick={handlePrev}>Voltar</button>}
                <button className='cake-next' onClick={handleNext}>Próximo</button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='cake-select-filling'>
            <div className='cake-content'>
              <h1 className='title'>Agora escolha o recheio</h1>
              <p className='subtitle'>Escolha entre Recheio Simples, Especial, Mousse ou Compotas</p>
              <div className='cake-options-filling'>
                <div className='cake-options-column'>
                  <div>
                    <h2 className='cake-section-title'>Simples:</h2>
                  </div>
                  <div className="cake-section-options">
                    <ul>
                      <li
                        className={`cake-option ${selection.filling === 'Chocolate' ? 'selected' : ''}`}
                        onClick={() => handleSelection('filling', 'Chocolate')}
                      >
                        Chocolate
                      </li>
                      <li
                        className={`cake-option ${selection.filling === 'Morango' ? 'selected' : ''}`}
                        onClick={() => handleSelection('filling', 'Morango')}
                      >
                        Morango
                      </li>
                      <li
                        className={`cake-option ${selection.filling === 'Brigadeiro' ? 'selected' : ''}`}
                        onClick={() => handleSelection('filling', 'Brigadeiro')}
                      >
                        Brigadeiro
                      </li>
                      <li
                        className={`cake-option ${selection.filling === 'Brigadeiro Branco' ? 'selected' : ''}`}
                        onClick={() => handleSelection('filling', 'Brigadeiro Branco')}
                      >
                        Brigadeiro Branco
                      </li>
                      <li
                        className={`cake-option ${selection.filling === 'Limão' ? 'selected' : ''}`}
                        onClick={() => handleSelection('filling', 'Limão')}
                      >
                        Limão
                      </li>
                      <li
                        className={`cake-option ${selection.filling === 'Maracujá' ? 'selected' : ''}`}
                        onClick={() => handleSelection('filling', 'Maracujá')}
                      >
                        Maracujá
                      </li>
                      <li
                        className={`cake-option ${selection.filling === 'Beijinho' ? 'selected' : ''}`}
                        onClick={() => handleSelection('filling', 'Beijinho')}
                      >
                        Beijinho
                      </li>
                      <li
                        className={`cake-option ${selection.filling === 'Creme Belga' ? 'selected' : ''}`}
                        onClick={() => handleSelection('filling', 'Creme Belga')}
                      >
                        Creme Belga
                      </li>
                      <li
                        className={`cake-option ${selection.filling === 'Creme Belga de Côco' ? 'selected' : ''}`}
                        onClick={() => handleSelection('filling', 'Creme Belga de Côco')}
                      >
                        Creme Belga de Côco
                      </li>
                      <li
                        className={`cake-option ${selection.filling === 'Ninho' ? 'selected' : ''}`}
                        onClick={() => handleSelection('filling', 'Ninho')}
                      >
                        Ninho
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='cake-options-column'>
                  <h2 className='cake-section-title'>Especiais:</h2>
                  <ul>
                    <li
                      className={`cake-option ${selection.filling === 'Chocolate Branco' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Chocolate Branco')}
                    >
                      Chocolate Branco
                    </li>
                    <li
                      className={`cake-option ${selection.filling === 'Paçoca' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Paçoca')}
                    >
                      Paçoca
                    </li>
                    <li
                      className={`cake-option ${selection.filling === 'Brigadeiro de Cream Cheese' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Brigadeiro de Cream Cheese')}
                    >
                      Brigadeiro de Cream Cheese
                    </li>
                    <li
                      className={`cake-option ${selection.filling === 'Oreo' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Oreo')}
                    >
                      Oreo
                    </li>
                    <li
                      className={`cake-option ${selection.filling === 'Doce de Leite' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Doce de Leite')}
                    >
                      Doce de Leite
                    </li>
                  </ul>
                </div>
                <div className='cake-options-column'>
                  <h2 className='cake-section-title'>Mousses:</h2>
                  <ul>
                    <li
                      className={`cake-option ${selection.filling === 'Mousse Morango' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Mousse Morango')}
                    >
                      Morango
                    </li>
                    <li
                      className={`cake-option ${selection.filling === 'Mousse Limão' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Mousse Limão')}
                    >
                      Limão
                    </li>
                    <li
                      className={`cake-option ${selection.filling === 'Mousse Maracujá' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Mousse Maracujá')}
                    >
                      Brigadeiro de Cream Cheese
                    </li>
                  </ul>
                </div>
                <div className='cake-options-column'>
                  <h2 className='cake-section-title'>Compotas:</h2>
                  <ul>
                    <li
                      className={`cake-option ${selection.filling === 'Compota de Morango' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Compota de Morango')}
                    >
                      Morango
                    </li>
                    <li
                      className={`cake-option ${selection.filling === 'Compota de Abacaxi' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Compota de Abacaxi')}
                    >
                      Abacaxi
                    </li>
                    <li
                      className={`cake-option ${selection.filling === 'Compota de Banana' ? 'selected' : ''}`}
                      onClick={() => handleSelection('filling', 'Compota de Banana')}
                    >
                      Banana
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='cake-bottom'>
              <button className='cake-prev' onClick={handlePrev}>Voltar</button>
              <button className='cake-next' onClick={handleNext}>Próximo</button>
            </div>
          </div>
        );
      case 3:
return (
  <div className='cake-order-summary'>
    <div className='cake-summary-container'>
      <div className='cake-content'>
        <h1 className='cake-section-title'>Resumo do Pedido</h1>
        <p>Seu <strong><span className='cake-name-emphasis'>{displayName}</span></strong> personalizado:</p>
        <p><strong>Massa:</strong> {selection.base}</p>
        <p><strong>Recheio:</strong> {selection.filling}</p>
      </div>
    </div>
    <div className='cake-observations-section'>
      <h2 className='cake-section-title'>Observações</h2>
      <textarea
        value={notes}
        onChange={e => setNotes(e.target.value)}
        placeholder="Alguma observação especial?"
        className="notes-textarea"
      />
    </div>
    <div className='cake-bottom'>
      <button className='cake-prev' onClick={handlePrev}>Voltar</button>
      <button
        className='cake-next'
        onClick={() => {
          addCustomCakeToCart({
            name: displayName,
            ...selection,
            notes: notes
          });
          navigate('/cart');
          if (onClose) onClose();
        }}
      >Adicionar ao Carrinho</button>
    </div>
  </div>
);
      default:
return null;
    }
  };

if (!isOpen) return null;

return (
  <div className='cake-popup-overlay'>
    <div className='cake-popup-content'>
      <button className='close-button' onClick={onClose}>X</button>
      {renderStep()}
    </div>
  </div>
);
};

export default BuildYourCake;
