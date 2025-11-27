import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectFilling.css'; // Arquivo CSS para estilização

const SelectFilling = () => {
  const navigate = useNavigate();

  const handleSelection = (filling) => {
    // Armazenar a seleção do usuário, se necessário
    // Navegar para a próxima etapa ou página de resumo
    navigate('/order-summary');
  };

  return (
    <div className='select-filling'>
      <div className='right-content'>
        <h1>Agora escolha o recheio</h1>
        <h2>Escolha o recheio:</h2>
        <ul>
          <li onClick={() => handleSelection('recheio1')}>Recheio 1 - R$30</li>
          <li onClick={() => handleSelection('recheio2')}>Recheio 2 - R$40</li>
          <li onClick={() => handleSelection('recheio3')}>Recheio 3 - R$50</li>
          {/* Adicione outras opções conforme necessário */}
        </ul>
        <h2>Escolha o recheio especial:</h2>
        <ul>
          <li onClick={() => handleSelection('recheioEspecial1')}>Recheio Especial 1 - R$20</li>
          <li onClick={() => handleSelection('recheioEspecial2')}>Recheio Especial 2 - R$25</li>
          <li onClick={() => handleSelection('recheioEspecial3')}>Recheio Especial 3 - R$30</li>
          {/* Adicione outras opções conforme necessário */}
        </ul>
      </div>
    </div>
  );
};

export default SelectFilling;
