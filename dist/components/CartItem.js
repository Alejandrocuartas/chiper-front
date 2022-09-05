import * as React from "react";
import "./styles/CartItem.css";
var CartItem = function (_a) {
    var product = _a.product;
    return (React.createElement("div", { className: "product_cart" },
        React.createElement("h5", null, product.name),
        React.createElement("div", null,
            React.createElement("strong", null,
                React.createElement("div", null,
                    "$",
                    product.price))),
        React.createElement("div", null,
            React.createElement("strong", null,
                React.createElement("div", null,
                    "-",
                    product.discount,
                    "%"))),
        React.createElement("div", null,
            React.createElement("strong", null,
                React.createElement("div", null,
                    "Final price: $",
                    ((100 - product.discount) * product.price) / 100)))));
};
export default CartItem;
//# sourceMappingURL=CartItem.js.map