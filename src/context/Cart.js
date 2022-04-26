import React, { useState } from 'react';

const CartContext = React.createContext({
    items: [],
    addItemInCart: (item) => {},
});

export const CartContextProvider = (props) => {
    const [items, updateItems] = useState([]);

    const getItemById = (id) => {
        return items.find((item) => item.id === id);
    };

    const addItemInCart = (item) => {
        if (getItemById(item.id)) {
            let cartItems = items.map((mapItem) => {
                if (mapItem.id === item.id) {
                    return {
                        ...mapItem,
                        quantity: mapItem.quantity + 1
                    }
                }
                return mapItem;
            });
            updateItems(cartItems)
        } else {
            item.quantity = 1;
            updateItems(old => [...old, item]);
        }
    };

    return <CartContext.Provider value={{items, addItemInCart}}>{props.children}</CartContext.Provider>
};

export default CartContext;
