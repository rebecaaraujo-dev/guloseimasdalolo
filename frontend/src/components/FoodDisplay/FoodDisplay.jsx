import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list, searchTerm} = useContext(StoreContext)

    console.log('FoodDisplay - searchTerm:', searchTerm);
    console.log('FoodDisplay - category:', category);

  return (
    <div className='food-display' id='food-display'>
        <h2>{searchTerm ? `Resultados para "${searchTerm}"` : 'Melhores guloseimas da região'}</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                const matchesCategory = category==="All" || category===item.category;
                const searchLower = searchTerm.toLowerCase();
                const matchesSearch = searchTerm === "" || 
                    item.name.toLowerCase().includes(searchLower) ||
                    item.description.toLowerCase().includes(searchLower) ||
                    item.category.toLowerCase().includes(searchLower);
                
                console.log(`Item: ${item.name}, matchesCategory: ${matchesCategory}, matchesSearch: ${matchesSearch}`);
                
                if(matchesCategory && matchesSearch){
                    return (
                        <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            category={item.category} />
                    )
                }
                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay