import "./style.css";
import {NavLink} from "react-router-dom";

const Header = () => {
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
                cart
            </div>
        </header>
    )
};

export default Header;
