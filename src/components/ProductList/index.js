import React from "react";

import ProductListItem from "../ProductListItem";
import "./style.css";

const ProductList = (props) => {
    const listItems = () => (
        props.items.map((item) => {
            return (
                <ProductListItem key={item.id} item={item} />
            );
        })
    );

    return (
        <div className="product-list">
            {listItems()}
        </div>
    )
};

export default ProductList;
