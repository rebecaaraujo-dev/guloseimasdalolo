
import React, { useContext } from "react";
import './Cart.css';
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

    const { cartItems, food_list, removeFromCart, updateQuantity, customCakes, setCustomCakes, cartItemsMetadata } = useContext(StoreContext);

    const cartEntries = food_list.filter(item => cartItems[item._id] > 0);
    const cartTotal = cartEntries.reduce((acc, item) => {
        const itemMetadata = cartItemsMetadata[item._id];
        if (itemMetadata?.totalPrice !== undefined) {
            // For Docinhos items, use the calculated total price
            return acc + (itemMetadata.totalPrice * cartItems[item._id]);
        }
        return acc + (item.price * cartItems[item._id]);
    }, 0);

    const sendToWhatsApp = () => {
        let message = "Olá! Gostaria de fazer um pedido:\n";

        cartEntries.forEach((item) => {
            const quantity = cartItems[item._id];
            const itemMetadata = cartItemsMetadata[item._id];
            const itemPrice = itemMetadata?.totalPrice || item.price;
            const itemTotal = (itemPrice * quantity).toFixed(2);
            const itemUnits = itemMetadata?.units || '';
            const itemNotes = itemMetadata?.notes || '';
            message += `\n*${item.name.toUpperCase()}* \n• Qtd: ${quantity} \n• Valor unitário: R$${itemPrice.toFixed(2)} `;
            if (itemUnits) message += `\n• Unidades: ${itemUnits}`;
            if (itemNotes) message += `\n• Obs: ${itemNotes}`;
            message += `\n`;
        });

        if (customCakes.length > 0) {
            customCakes.forEach((cake, idx) => {
                message += `\n*${cake.name.toUpperCase()}*`;
                if (cake.name === 'Pavê' && cake.type) {
                    message += ` - Sabor: ${cake.type}`;
                } else {
                    if (cake.base) message += `\n• Massa: ${cake.base}`;
                    if (cake.filling) message += `\n• Recheio: ${cake.filling}`;
                }
                if (cake.notes) message += `\n• Obs: ${cake.notes}`;
                message += `\n• Valor unitário: R$${customCakePrice.toFixed(2)}\n`;
            });
        }

        const finalTotal = (cartTotal + (customCakes.length * 100)).toFixed(2);
        message += `\n*Total Estimado: R$${finalTotal}*\n`;
        message += "\nPor favor, confirme o valor final e o prazo de entrega. Obrigado!";

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "5521969980595";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    };


    const removeCustomCake = (idx) => {
        setCustomCakes(prev => prev.filter((_, i) => i !== idx));
    };

    const customCakePrice = 100;
    const customCakesTotal = (customCakes.length * customCakePrice);

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p> </p>
                    <p>Itens</p>
                    <p>Preço</p>
                    <p>Quantidade</p>
                    <p>Total</p>
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
                                    <p className="cross" onClick={() => removeFromCart(item._id)}>x</p>
                                    <p>
                                        <strong>{item.name}</strong>
                                        {cartItemsMetadata[item._id]?.units && <div className="cart-item-notes">Unidades: {cartItemsMetadata[item._id]?.units}</div>}
                                        {cartItemsMetadata[item._id]?.notes && <div className="cart-item-notes">Observações: {cartItemsMetadata[item._id]?.notes}</div>}
                                    </p>
                                    <p>R${cartItemsMetadata[item._id]?.totalPrice ? cartItemsMetadata[item._id].totalPrice.toFixed(2) : item.price.toFixed(2)}</p>
                                    <div className="cart-quantity-control">
                                        <button className="qty-btn" onClick={() => updateQuantity(item._id, cartItems[item._id] - 1)}>-</button>
                                        <span className="qty-display">{cartItems[item._id]}</span>
                                        <button className="qty-btn" onClick={() => updateQuantity(item._id, cartItems[item._id] + 1)}>+</button>
                                    </div>
                                    <p>R${(cartItemsMetadata[item._id]?.totalPrice ? cartItemsMetadata[item._id].totalPrice * cartItems[item._id] : item.price * cartItems[item._id]).toFixed(2)}</p>
                                </div>
                                <hr />
                            </div>
                        ))}
                        {customCakes.map((cake, idx) => (
                            <div key={"custom-" + idx}>
                                <div className="cart-items-title cart-items-item">
                                    <p className="cross" onClick={() => removeCustomCake(idx)}>x</p>
                                    <p>
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
                                            {cake.notes && <div className="cart-cake-notes">Observações: {cake.notes}</div>}
                                        </div>
                                    </p>
                                    <p>R${customCakePrice.toFixed(2)}</p>
                                    <p>1</p>
                                    <p>R${customCakePrice.toFixed(2)}</p>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </>
                )}
                {(cartEntries.length > 0 || customCakes.length > 0) && (
                    <>
                        <div className="cart-bottom">
                            <div className="cart-total">
                                Total do carrinho: R${(cartTotal + customCakesTotal).toFixed(2)}
                            </div>
                            <button className="cart-whatsapp-btn" onClick={sendToWhatsApp}>
                                Enviar Pedido pelo WhatsApp
                            </button>

                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart