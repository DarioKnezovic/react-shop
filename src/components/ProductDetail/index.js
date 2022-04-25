import React, {useContext} from "react";

import "./style.css";
import {Rating} from "@mui/material";
import CartContext from "../../context/Cart";

const ProductDetail = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCart = () => {
        cartCtx.updateCartItems(props.product);
    }
    return (
        <div className="product-detail">
            <div className="row image-row">
                <img className="product-detail__image" src={props.product.image} alt="Product" />
            </div>
            <div className="row text-row">
                <div className="product-detail__category">
                    {props.product.category}
                </div>
                <h1 className="product-detail__title">
                    {props.product.title}
                </h1>
                <div className="product-detail__price">
                    {props.product.price}€
                </div>
                <p className="product-detail__description">
                    {props.product.description}
                </p>
                <div className="product-detail__rating">
                    <Rating
                        name="read-only"
                        style={{color: '#fff'}}
                        value={props.product.rating.rate}
                        readOnly />
                    <span className="product-detail__count">({props.product.rating.count})</span>
                </div>
                <button className="product-detail__add-to-cart" onClick={addToCart}>
                    Add to cart
                </button>
            </div>

        </div>
    )
};

export default ProductDetail;
