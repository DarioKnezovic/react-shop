import React from "react";

import "./style.css";

const ProductDetail = (props) => {
    return (
        <div className="product-detail">
            {props.product.title}
        </div>
    )
};

export default ProductDetail;
