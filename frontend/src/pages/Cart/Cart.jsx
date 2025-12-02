
import React, { useContext } from "react";
import './Cart.css';
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

    const { cartItems, food_list, removeFromCart, customCakes, setCustomCakes } = useContext(StoreContext);

    // Calculate total
    const cartEntries = food_list.filter(item => cartItems[item._id] > 0);
    const cartTotal = cartEntries.reduce((acc, item) => acc + item.price * cartItems[item._id], 0);


    // Remove custom cake by index
    const removeCustomCake = (idx) => {
        setCustomCakes(prev => prev.filter((_, i) => i !== idx));
    };

    // Calculate total for custom cakes (set a price, e.g., 100)
    const customCakePrice = 100;
    const customCakesTotal = (customCakes.length * customCakePrice);

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Itens</p>
                    <p>Preço</p>
                    <p>Quantidade</p>
                    <p>Total</p>
                    <p>Remover</p>
                </div>
                <br />
                <hr />
                {cartEntries.length === 0 && customCakes.length === 0 ? (
                        <div className="cart-empty-message">
                            Seu carrinho está vazio.
                    </div>
                ) : (
                    <>
                        {cartEntries.map((item) => (
                            <div key={item._id}>
                                <div className="cart-items-title cart-items-item">
                                    <p>{item.name}</p>
                                    <p>R${item.price.toFixed(2)}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>R${(item.price * cartItems[item._id]).toFixed(2)}</p>
                                    <p className="cross" onClick={() => removeFromCart(item._id)}>x</p>
                                </div>
                                <hr />
                            </div>
                        ))}
                        {customCakes.map((cake, idx) => (
                            <div key={"custom-" + idx}>
                                <div className="cart-items-title cart-items-item">
                                    <div>
                                        <strong>{cake.name}</strong>
                                        <div className="cart-cake-details">
                                            {cake.name === 'Pavê' && cake.type ? (
                                                <div>Sabor: {cake.type.charAt(0).toUpperCase() + cake.type.slice(1)}</div>
                                            ) : (
                                                <>
                                                    {cake.base && <div>Massa: {cake.base}</div>}
                                                    {cake.filling && <div>Recheio: {cake.filling}</div>}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <p>R${customCakePrice.toFixed(2)}</p>
                                    <p>1</p>
                                    <p>R${customCakePrice.toFixed(2)}</p>
                                    <p className="cross" onClick={() => removeCustomCake(idx)}>x</p>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </>
                )}
                {(cartEntries.length > 0 || customCakes.length > 0) && (
                    <div className="cart-total">
                        Total do carrinho: R${(cartTotal + customCakesTotal).toFixed(2)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart