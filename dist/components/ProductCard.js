var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import ProductInfo from "./ProductInfo";
import { useGlobalContext } from "../context";
import "./styles/ProductCard.css";
var ProductCard = function (_a) {
    var product = _a.product;
    var cart = useGlobalContext.cart, setCart = useGlobalContext.setCart;
    var _b = React.useState(false), isOpen = _b[0], setOpen = _b[1];
    var onClose = function () {
        setOpen(false);
    };
    var addProduct = function () {
        product.bought = true;
        setCart(__spreadArray(__spreadArray([], cart, true), [product], false));
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "card", onClick: function () { return setOpen(true); } },
            React.createElement("img", { src: product.image, className: "card-img-top", alt: "..." }),
            React.createElement("div", { className: "card-body" },
                React.createElement("div", { className: "product-info" },
                    React.createElement("h4", null, product.name),
                    React.createElement("div", { className: "product-price" },
                        React.createElement("div", null,
                            "$",
                            React.createElement("strong", null, product.price)),
                        product.discount ? (React.createElement("div", null,
                            React.createElement("strong", null,
                                "-",
                                product.discount,
                                "%"),
                            React.createElement("div", null,
                                "$",
                                React.createElement("strong", null, ((100 - product.discount) / 100) *
                                    product.price)))) : null)),
                product.bought ? (React.createElement("button", { type: "button", className: "btn btn-danger disabled" }, "Add")) : (React.createElement("button", { onClick: addProduct, type: "button", className: "btn btn-danger" }, "Add")))),
        React.createElement(ProductInfo, { onClose: onClose, isOpen: isOpen, product: product })));
};
export default ProductCard;
("https://pm1.narvii.com/6821/33aed0f2602deba81979f099263597de3a645492v2_hq.jpg");
//# sourceMappingURL=ProductCard.js.map