import React from "react";

import "./style.css";
import {Rating} from "@mui/material";

const ProductDetail = (props) => {
    return (
        <div className="product-detail">
            <Rating value={props.product.rating.rate} />
            {props.product.title}
        </div>
    )
};

export default ProductDetail;
