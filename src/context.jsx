import React, { useState, createContext } from "react";
const appContext = createContext();
const Context = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const defaultContext = {
        products,
        setProducts: (newProducts) => {
            setProducts(newProducts);
        },
        cart,
        setCart: (newCart) => {
            setCart(newCart);
        },
    };

    return (
        <appContext.Provider value={defaultContext}>
            {children}
        </appContext.Provider>
    );
};

export { Context, appContext };
