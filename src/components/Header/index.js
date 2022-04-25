import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {ShoppingBag} from "@mui/icons-material";

import "./style.css";
import CartContext from "../../context/Cart";

const Header = () => {
    const cartCtx = useContext(CartContext);
    return (
        <header className="header">
            <NavLink className="logo-link" to="/">
                <h1>Dario SHOP</h1>
            </NavLink>

            <ul className="navbar-nav">
                <li>
                    <NavLink to="/about" activeclassname="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeclassname="active">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/help" activeclassname="active">Help</NavLink>
                </li>
            </ul>

            <div className="cart">
                <span className="count">
                    {cartCtx.items.length > -1 && cartCtx.items.length}
                </span>
                <ShoppingBag sx={{ fontSize: 40 }} />
            </div>
        </header>
    )
};

export default Header;
