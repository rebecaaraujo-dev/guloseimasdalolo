import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import './SelectCakeBase.css'

const SelectCakeBase = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {image,name} = location.state || {};

  const handleSelection = (base) => {
    navigate('/select-filling');
  };

  return (
    <div className='select-cake-base'>
      <div className='left-content'>
        <img src={image} alt=''/>
      </div>
      <div className='right-content'>
        <div className='column-1'>
          <h1>Monte seu {name}</h1>
          <h2>Escolha sua massa:</h2>
          <ul>
            <li onClick={() => handleSelection('massa1')}>Massa Branca - R$50</li>
            <li onClick={() => handleSelection('massa2')}>Massa 2 - R$60</li>
            <li onClick={() => handleSelection('massa3')}>Massa 3 - R$70</li>
            {/* Adicione outras opções conforme necessário */}
          </ul>
        </div>
        <div className='column-2'>
          <button>Próximo</button> 
        </div>  
      </div>  
    </div>
  );
};

export default SelectCakeBase;
