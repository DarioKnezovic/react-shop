import React from "react";

import "./style.css";
import {NavLink} from "react-router-dom";

const ProductListItem = (props) => {
    return (
        <div className="product-item">
            <img className="product-item__image" src={props.item.image} alt="Product" />
            <div className="product-item__title">
                <NavLink to={"/product/"+props.item.id}>
                    {props.item.title}
                </NavLink>
            </div>
            <div className="product-item__category">
                {props.item.category}
            </div>
            <div className="product-item__price">
                {props.item.price}€
            </div>
        </div>
    )
};

export default ProductListItem;
