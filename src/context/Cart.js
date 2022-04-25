import React, { useState } from 'react';

const CartContext = React.createContext({
    items: [],
    updateCartItems: (item) => {},
});

export const CartContextProvider = (props) => {
    const [items, updateItems] = useState([]);

    const updateCartItems = (item) => {
        updateItems(old => [...old, item]);
    }

    return <CartContext.Provider value={{items, updateCartItems}}>{props.children}</CartContext.Provider>
};

export default CartContext;
