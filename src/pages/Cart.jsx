import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { appContext } from "../context";
import "./styles/Cart.css";

const Cart = () => {
    const { cart, setCart } = useContext(appContext);
    if (cart.length === 0) {
        return <h1 style={{ color: "red" }}>The cart is empty</h1>;
    }
    return (
        <ul className="list-group">
            {cart.map((i) => {
                return (
                    <li
                        key={i._id}
                        className="list-group-item mb-2 list_cart_products"
                    >
                        <CartItem product={i}></CartItem>
                    </li>
                );
            })}
            <li
                key={i._id}
                className="list-group-item mb-2 d-flex justify-content-between list_cart_products"
            ></li>
        </ul>
    );
};

export default Cart;
