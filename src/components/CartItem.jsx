import React from "react";

import "./styles/CartItem.css";

const CartItem = ({ product }) => {
    return (
        <div className="product_cart">
            <h5>{product.name}</h5>
            <div>
                <strong>
                    <div>${product.price}</div>
                </strong>
            </div>
            <div>
                <strong>
                    <div>-{product.discount}%</div>
                </strong>
            </div>
            <div>
                <strong>
                    <div>
                        Final price: $
                        {((100 - product.discount) * product.price) / 100}
                    </div>
                </strong>
            </div>
        </div>
    );
};

export default CartItem;
