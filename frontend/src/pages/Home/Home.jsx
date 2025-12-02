import React, {useState, useContext} from "react";
import './Home.css';
import { Header } from "../../components/Header/Header";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import { StoreContext } from "../../context/StoreContext";
import { menu_list } from "../../assets/assets";

const Home = () => {

    const[category,setCategory] = useState("All");
    const { searchTerm } = useContext(StoreContext);
    const isSearching = searchTerm.trim().length > 0;

    return (
        <div>
            {!isSearching && <Header />}
            {!isSearching && (
                <div className='menu' id='menu'>
                    <h1>Veja nosso cardápio</h1>
                    <p className='menu-text'>Escolha entre uma deliciosa variedade de bolos, tortas e doces artesanais, feitos com os melhores ingredientes e muito amor! Nossa missão é adoçar seus momentos e tornar cada ocasião inesquecível com nossas guloseimas.</p>
                    <div className='menu-list'>
                        {menu_list.map((item, index) => {
                            return (
                                <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='menu-list-item'>
                                    <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} />
                                    <p>{item.menu_name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <hr />
                </div>
            )}
            <FoodDisplay category={category} />
        </div>
    )
}

export default Home