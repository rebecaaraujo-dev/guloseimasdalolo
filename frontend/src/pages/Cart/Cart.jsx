import React, { useContext } from "react";
import './Cart.css';
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

    const { cartItems, food_list, removeFromCart, cartItemDetails } = useContext(StoreContext);

    const sendToWhatsApp = () => {
        let message = "*Pedido - Guloseimas da Lolo*\n";
        message += "Nos envie esta mensagem para confirmarmos e enviarmos seu orcamento!\n\n";
        message += "Aqui estao os detalhes do seu pedido:\n\n";
        let hasItems = false;

        food_list.forEach((item) => {
            if (cartItems[item._id] > 0) {
                hasItems = true;
                const quantity = cartItems[item._id];
                message += `• ${item.name}\n`;
                message += `  Quantidade: ${quantity}\n`;

                // Se tem detalhes de personalização, mostra cada um
                if (cartItemDetails[item._id] && cartItemDetails[item._id].length > 0) {
                    cartItemDetails[item._id].forEach((detail, index) => {
                        message += `  ${index + 1}. Massa: ${detail.massa} | Recheio: ${detail.recheio}\n`;
                    });
                }
                message += `\n`;
            }
        });

        if (!hasItems) {
            alert("Seu carrinho esta vazio!");
            return;
        }

        message += "_Aguardo seu orcamento!_";

        const phoneNumber = "5521969980595";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, '_blank');
    }

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Itens</p>
                    <p>Nome</p>
                    <p>Quantidade</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p className="cross" onClick={() => removeFromCart(item._id)}>x</p>
                                </div>
                                <hr />
                            </div>

                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <div className="cart-total-left">
                        <h2>Solicitar Orçamento</h2>
                        <p className="cart-total-info">Os itens selecionados serão enviados para orçamento via WhatsApp</p>
                    </div>
                    <button onClick={sendToWhatsApp}>Enviar Pedido pelo WhatsApp</button>
                </div>
            </div>
        </div>
    )
}

export default Cart