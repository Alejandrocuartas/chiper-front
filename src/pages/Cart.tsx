import * as React from "react";
const { useNavigate } = require("react-router-dom");
import CartItem from "../components/CartItem";
import { useGlobalContext } from "../context";
import "./styles/Cart.css";

const Cart = () => {
    const navigate = useNavigate();
    const { cart, setCart } = useGlobalContext
    let cartPrices = cart.map((i) => {
        if(i.discount){
            const total = ((100 - i.discount) * i.price) / 100;
            return total;
        }else{
            return i.price
        }
    });

    const buyProducts = () => {
        const ids = cart.map((i) => i._id);
        for (const idProduct in ids) {
            fetch(`${process.env.API}/api/product/buy/${ids[idProduct]}`, {
                method: "PATCH",
            })
                .then(async (res) => {
                    if (!res.ok) {
                        const resText = await res.json()
                        throw new Error(resText.error);
                    }
                })
                .catch((err) => console.log(err));
        }
        setCart([]);
        alert("Product bought");
        navigate("/");
    };

    if (cart.length === 0) {
        return <h1 style={{ color: "red" }}>The cart is empty</h1>;
    }
    return (
        <ul className="list-group">
            {cart.map((item) => {
                return (
                    <li
                        key={item._id}
                        className="list-group-item mb-2 list_cart_products"
                    >
                        <CartItem product={item}></CartItem>
                    </li>
                );
            })}
            <li
                key="nkbj"
                className="list-group-item mb-2 d-flex justify-content-between list_cart_products"
            >
                <div>Total Price: ${cartPrices.reduce((p, c) => p + c)}</div>
            </li>

            <button onClick={buyProducts} className="btn btn-danger">
                Buy
            </button>
        </ul>
    );
};

export default Cart;
