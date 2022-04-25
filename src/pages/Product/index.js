import { useParams } from 'react-router-dom';
import React, {useCallback, useEffect, useState} from "react";
import axios from 'axios';
import ProductDetail from "../../components/ProductDetail";

import Loader from "../../components/Loader";
import Constants from "../../constants";

const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchProduct = useCallback(async () => {
        axios.get(`${Constants.API.ROUTES.PRODUCTS}/${params.productId}`)
            .then((res) => {
                setProduct(res.data);
                setIsLoading(false);
            })
    }, [params.productId]);

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    return (
        <React.Fragment>
            {isLoading && <Loader />}
            {!isLoading && <ProductDetail product={product} />}
        </React.Fragment>
    )
};

export default Product;
