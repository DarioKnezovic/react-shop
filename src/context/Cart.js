import React, { useState } from 'react';

const CartContext = React.createContext({
    items: []
});

export const CartContextProvider = (props) => {
    const [items, updateItems] = useState([]);

    return <CartContext.Provider value={{items}}>{props.children}</CartContext.Provider>
};

export default CartContext;
