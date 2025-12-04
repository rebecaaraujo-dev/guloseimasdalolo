import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{


    const [cartItems,setCartItems] = useState({});
    const [cartItemsMetadata, setCartItemsMetadata] = useState({});
    const [customCakes, setCustomCakes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const addToCart = (itemId, metadata = {}) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if (metadata && Object.keys(metadata).length > 0) {
            setCartItemsMetadata((prev)=>({...prev,[itemId]:metadata}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const updateQuantity = (itemId, quantity) => {
        if (quantity <= 0) {
            setCartItems((prev)=>({...prev,[itemId]:0}))
        } else {
            setCartItems((prev)=>({...prev,[itemId]:quantity}))
        }
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const addCustomCakeToCart = (cake) => {
        setCustomCakes(prev => [...prev, cake]);
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartItemsMetadata,
        setCartItemsMetadata,
        customCakes,
        setCustomCakes,
        addCustomCakeToCart,
        searchTerm,
        setSearchTerm
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider