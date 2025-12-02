import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list, searchTerm} = useContext(StoreContext)
    
    const filteredItems = food_list.filter(item => {
        const matchesCategory = category === "All" || category === item.category;
        const term = searchTerm.trim().toLowerCase();
        const matchesSearch = !term || item.name.toLowerCase().includes(term) || item.category.toLowerCase().includes(term);
        return matchesCategory && matchesSearch;
    });
    
    const hasSearchResults = searchTerm.trim().length > 0;

  return (
    <div className='food-display' id='food-display'>
        <h1>{hasSearchResults ? `Resultados para "${searchTerm}"` : 'Melhores guloseimas perto de você'}</h1>
        <div className="food-display-list">
            {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                    <FoodItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        category={item.category}
                    />
                ))
            ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 20px' }}>
                    <p style={{ fontSize: '18px', color: '#999' }}>Nenhum produto encontrado</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default FoodDisplay