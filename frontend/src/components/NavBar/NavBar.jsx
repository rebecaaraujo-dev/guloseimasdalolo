import React, { useState, useContext } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export const NavBar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home");
    const [showSearch, setShowSearch] = useState(false);
    const { searchTerm, setSearchTerm } = useContext(StoreContext);

    const handleSearch = (e) => {
        e.preventDefault();
        setShowSearch(false);
    }

    const handleClearSearch = () => {
        setSearchTerm('');
        setShowSearch(false);
    } 

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='https://www.ifood.com.br/' target="_blank" onClick={() => setMenu("ifood")} className={menu === "ifood" ? "active" : ""}>ifood</a>
                <Link to='/About' onClick={() => setMenu("contato")} className={menu === "contato" ? "active" : ""}>contato</Link>
            </ul>

            <div className={`navbar-right ${showSearch ? 'search-active' : ''}`}>
                {!showSearch ? (
                    <button 
                        type="button" 
                        className="search-icon-btn"
                        onClick={() => setShowSearch(true)}
                    >
                        <img src={assets.search_icon} alt="Buscar" />
                    </button>
                ) : (
                    <form className="search-form" onSubmit={handleSearch}>
                        <button 
                            type="button" 
                            className="search-icon-btn"
                            onClick={() => !showSearch && setShowSearch(true)}
                        >
                            <img src={assets.search_icon} alt="Buscar" />
                        </button>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Buscar por nome ou categoria..."
                            value={searchTerm}
                            autoFocus={showSearch}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button 
                                type="button" 
                                className="search-clear-btn"
                                onClick={handleClearSearch}
                            >
                                x
                            </button>
                        )}
                    </form>
                )}
                <div className="navbar-basketicon">
                    <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    )
}
