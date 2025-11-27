import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BuildYourCake.css';
import { StoreContext } from '../../context/StoreContext';

const SelectCakeBase = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, id } = location.state || {};

  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    base: null,
    filling: null,
    specialFilling: null,
    mousseFilling: null,
    compotas: null,
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleSelection = (type, value) => {
    setSelection(prev => ({ ...prev, [type]: value }))
    setErrorMessage('')
  };

  const handleNext = () => {
    if ((step === 1 && selection.base) || (step === 2 && selection.filling || selection.specialFilling || selection.mousseFilling || selection.compotas)) {
      setStep(prev => prev + 1);
      setErrorMessage('');
    } else {
      setErrorMessage('Por favor, selecione uma opção antes de continuar.');
    }
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const { addToCart } = useContext(StoreContext);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='select-cake-base'>
            <div className='content'>
              <h1 className='title'>Monte seu {name}</h1>
              <p className='subtitle'>Escolha entre Massa Simples ou Massa Especial</p>
              <div className="options">
                <div className="options-column">
                  <h2 className='section-title'>Massas simples:</h2>
                  <ul>
                    <li className={`option ${selection.base === 'Baunilha' ? 'selected' : ''}`} onClick={() => handleSelection('base', 'Baunilha')}>Baunilha</li>
                    <li className={`option ${selection.base === 'Chocolate' ? 'selected' : ''}`} onClick={() => handleSelection('base', 'Chocolate')}>Chocolate</li>
                    <li className={`option ${selection.base === 'Natural' ? 'selected' : ''}`} onClick={() => handleSelection('base', 'Natural')}>Natural</li>
                  </ul>
                </div>
                <div className="options-column">
                  <h2 className='section-title'>Massas especiais:</h2>
                  <ul>
                    <li className={`option ${selection.base === 'Red Velvet' ? 'selected' : ''}`} onClick={() => handleSelection('base', 'Red Velvet')}>Red Velvet</li>
                    <li className={`option ${selection.base === 'Formigueiro' ? 'selected' : ''}`} onClick={() => handleSelection('base', 'Formigueiro')}>Formigueiro</li>
                    <li className={`option ${selection.base === 'Cenoura' ? 'selected' : ''}`} onClick={() => handleSelection('base', 'Cenoura')}>Cenoura</li>
                  </ul>
                </div>
              </div>
              <div className='bottom'>
                {step > 1 && <button className='prev' onClick={handlePrev}>Voltar</button>}
                <button className='next' onClick={handleNext}>Próximo</button>
              </div>
            </div>

          </div>
        );
      case 2:
        return (
          <div className='select-filling'>
            <div className='content'>
              <h1 className='title'>Agora escolha o recheio</h1>
              <p className='subtitle'>Escolha entre Recheio Simples, Especial, Mousse ou Compotas</p>
              <div className="options-filling">
                <div className="options-column">
                  <h2 className='section-title'>Simples:</h2>
                  <ul>
                    <li className={`option ${selection.filling === 'Chocolate' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Chocolate')}>Chocolate</li>
                    <li className={`option ${selection.filling === 'Morango' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Morango')}>Morango</li>
                    <li className={`option ${selection.filling === 'Brigadeiro Branco' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Brigadeiro Branco')}>Brigadeiro Branco</li>
                    <li className={`option ${selection.filling === 'Limão' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Limão')}>Limão</li>
                    <li className={`option ${selection.filling === 'Maracujá' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Maracujá')}>Maracujá</li>
                    <li className={`option ${selection.filling === 'Beijinho' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Beijinho')}>Beijinho</li>
                    <li className={`option ${selection.filling === 'Creme Belga' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Creme Belga')}>Creme Belga</li>
                    <li className={`option ${selection.filling === 'Creme Belga de Côco' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Creme Belga de Côco')}>Creme Belga de Côco</li>
                    <li className={`option ${selection.filling === 'Ninho' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Ninho')}>Ninho</li>
                  </ul></div>
                <div className="options-column">
                  <h2 className='section-title'>Especiais:</h2>
                  <ul>
                    <li className={`option ${selection.filling === 'Chocolate Branco' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Chocolate Branco')}>Chocolate Branco</li>
                    <li className={`option ${selection.filling === 'Paçoca' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Paçoca')}>Paçoca</li>
                    <li className={`option ${selection.filling === 'Brigadeiro de Cream Cheese' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Brigadeiro de Cream Cheese')}>Brigadeiro de Cream Cheese</li>
                    <li className={`option ${selection.filling === 'Oreo' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Oreo')}>Oreo</li>
                    <li className={`option ${selection.filling === 'Doce de Leite' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Doce de Leite')}>Doce de Leite</li>
                  </ul>
                </div>
                <div className="options-column">
                  <h2 className='section-title'>Mousses:</h2>
                  <ul>
                    <li className={`option ${selection.filling === 'Mousse Morango' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Mousse Morango')}>Morango</li>
                    <li className={`option ${selection.filling === 'Mousse Limão' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Mousse Limão')}>Limão</li>
                    <li className={`option ${selection.filling === 'Mousse Maracujá' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Mousse Maracujá')}>Brigadeiro de Cream Cheese</li>
                  </ul>
                </div>
                <div className="options-column">
                  <h2 className='section-title'>Compotas:</h2>
                  <ul>
                    <li className={`option ${selection.filling === 'Compota de Morango' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Compota de Morango')}>Morango</li>
                    <li className={`option ${selection.filling === 'Compota de Abacaxi' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Compota de Abacaxi')}>Abacaxi</li>
                    <li className={`option ${selection.filling === 'Compota de Banana' ? 'selected' : ''}`} onClick={() => handleSelection('filling', 'Compota de Banana')}>Banana</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='bottom'>
              <button className='prev' onClick={handlePrev}>Voltar</button>
              <button className='next' onClick={handleNext}>Próximo</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='order-summary'>
            <div className='content'>
              <h1 className='section-title'>Resumo do Pedido</h1>
              <p>Seu <strong>{name}</strong> personalizado:</p>
              <p><strong>Massa:</strong> {selection.base}</p>
              <p><strong>Recheio:</strong> {selection.filling}</p>
            </div>
            <div className="bottom">
              <button className='prev' onClick={handlePrev}>Voltar</button>
              <button className='next' onClick={() => {
                if (id) {
                  const details = {
                    massa: selection.base,
                    recheio: selection.filling
                  };
                  addToCart(id, details);
                  navigate('/cart');
                }
              }}>Adicionar ao Carrinho</button>
            </div>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}

          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className='cake-customization'>
      {renderStep()}
    </section>
  );
};

export default SelectCakeBase;
