import React, { useState, useContext } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export const NavBar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home");
    const [showSearch, setShowSearch] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { searchTerm, setSearchTerm, cartItems, customCakes } = useContext(StoreContext);
    const cartCount = Object.values(cartItems).reduce((sum, qty) => sum + (qty > 0 ? qty : 0), 0) + (customCakes ? customCakes.length : 0);

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

            <button
                className="navbar-hamburger"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                {mobileOpen ? '✕' : '☰'}
            </button>

            <ul className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
                <Link to='/' onClick={() => { setMenu("home"); setMobileOpen(false); }} className={menu === "home" ? "active" : ""}>home</Link>
                <Link to='/menu' onClick={() => { setMenu("menu"); setMobileOpen(false); }} className={menu === "menu" ? "active" : ""}>menu</Link>
                <a href='https://www.ifood.com.br/' target="_blank" onClick={() => { setMenu("ifood"); setMobileOpen(false); }} className={menu === "ifood" ? "active" : ""}>ifood</a>
                <Link to='/About' onClick={() => { setMenu("contato"); setMobileOpen(false); }} className={menu === "contato" ? "active" : ""}>contato</Link>
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
                        <button 
                            type="button" 
                            className="search-clear-btn"
                            onClick={handleClearSearch}
                            style={{ display: 'inline-block' }}
                        >
                            x
                        </button>
                    </form>
                )}
                <div className="navbar-basketicon">
                    <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
                    <div className="dot">
                        {cartCount > 0 ? cartCount : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
