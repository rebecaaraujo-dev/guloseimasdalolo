import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState({});
    const [cartItemDetails,setCartItemDetails] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    const addToCart = (itemId, details = null) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
            if (details) {
                setCartItemDetails((prev)=>({...prev,[itemId]: [details]}))
            }
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            if (details) {
                setCartItemDetails((prev)=>({...prev,[itemId]: [...(prev[itemId] || []), details]}))
            }
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if (cartItemDetails[itemId] && cartItemDetails[itemId].length > 0) {
            setCartItemDetails((prev)=>{
                const newDetails = {...prev}
                newDetails[itemId] = newDetails[itemId].slice(0, -1)
                return newDetails
            })
        }
    }

    const setCartItemQuantity = (itemId, quantity) => {
        const qty = parseInt(quantity) || 0;
        if (qty >= 0) {
            setCartItems((prev)=>({...prev,[itemId]:qty}))
        }
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        cartItemDetails,
        setCartItemQuantity,
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