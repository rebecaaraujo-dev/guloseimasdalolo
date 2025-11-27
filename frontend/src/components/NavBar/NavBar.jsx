import React, { useState, useContext } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export const NavBar = () => {

    const [menu, setMenu] = useState("home");
    const { cartItems, searchTerm, setSearchTerm } = useContext(StoreContext);
    const [showSearch, setShowSearch] = useState(false);

    const getTotalCartItems = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                total += cartItems[item];
            }
        }
        return total;
    };

    return (
        <div className='navbar'>
            <Link to='/' onClick={() => {
                setMenu("home");
                setSearchTerm('');
                setShowSearch(false);
            }}>
                <img src={assets.logo} alt="" className="logo" />
            </Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <Link to='/#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</Link>
                <a href='https://www.ifood.com.br/' target="_blank" onClick={() => setMenu("ifood")} className={menu === "ifood" ? "active" : ""}>ifood</a>
                <Link to='/About' onClick={() => setMenu("contato")} className={menu === "contato" ? "active" : ""}>contato</Link>
            </ul>

            <div className="navbar-right">
                <div className="navbar-search">
                    {showSearch && (
                        <input 
                            type="text" 
                            placeholder="Buscar produtos..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                console.log('Pesquisando:', e.target.value);
                            }}
                            className="navbar-search-input"
                            autoFocus
                        />
                    )}
                    <img 
                        src={assets.search_icon} 
                        alt="" 
                        style={{cursor: 'pointer'}} 
                        onClick={() => {
                            setShowSearch(!showSearch);
                            if (showSearch) {
                                setSearchTerm('');
                            }
                        }}
                    />
                </div>
                <div className="navbar-searchicon">
                    <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
                    {getTotalCartItems() > 0 && <div className="dot">{getTotalCartItems()}</div>}
                </div>
            </div>
        </div>
    )
}
