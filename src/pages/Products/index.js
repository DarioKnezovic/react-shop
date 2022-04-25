import React, {useCallback, useEffect, useState} from "react";
import axios from 'axios';

import ProductList from "../../components/ProductList";
import Constants from "../../constants";
import "./style.css";
import Loader from "../../components/Loader";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProducts = useCallback(async () => {
        axios.get(`${Constants.API.ROUTES.PRODUCTS}`).then(res => {
            setProducts(res.data);
            setIsLoading(false);
        })
    }, []);

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts]);

    return (
        <React.Fragment>
            <h1 className="page-title">Products</h1>
            {isLoading && <Loader />}
            {!isLoading && <ProductList items={products} />}
        </React.Fragment>
    )
};

export default Products;
