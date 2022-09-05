import * as React from "react";
var _a = require("react-router-dom"), Link = _a.Link, useNavigate = _a.useNavigate;
import NewProduct from "./newProduct";
import { useGlobalContext } from "../context";
import "./styles/Header.css";
var Header = function () {
    var navigate = useNavigate();
    var _a = React.useState(" "), query = _a[0], setQuery = _a[1];
    var products = useGlobalContext.products, setProducts = useGlobalContext.setProducts;
    var _b = React.useState(false), isOpen = _b[0], setOpen = _b[1];
    var onClose = function () {
        setOpen(false);
    };
    var priceFilter = function (e) {
        var ascendingPrice = e.target.value == 2;
        if (ascendingPrice) {
            var productsList = products.sort(function (a, b) {
                return a.price - b.price;
            });
            setProducts(productsList);
        }
        var descendingPrice = e.target.value == 1;
        if (descendingPrice) {
            var productsList = products.sort(function (a, b) {
                return b.price - a.price;
            });
            setProducts(productsList);
        }
    };
    var onQuery = function (e) {
        setQuery(e.target.value);
        var result = products.filter(function (product) {
            return "".concat(product.name, " ").concat(product.description)
                .toLowerCase()
                .includes(query.toLowerCase());
        });
        setProducts(result);
    };
    return (React.createElement("div", null,
        React.createElement("nav", { className: "navbar navbar-expand-lg bg-light" },
            React.createElement("div", { className: "container-fluid container-fluidff" },
                React.createElement(Link, { className: "navbar-brand", to: "/" },
                    React.createElement("img", { src: "https://growth.chiper.co/static/media/chiper-logo.b02a6520d32de77f5cfaea94e3f7757b.svg", alt: "Chiper logo" })),
                React.createElement("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    React.createElement("span", { className: "navbar-toggler-icon" })),
                React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                    React.createElement("form", { className: "d-flex", role: "search" },
                        React.createElement("input", { onChange: onQuery, className: "form-control me-2", type: "text", placeholder: "Search", "aria-label": "Search" }),
                        React.createElement("select", { style: { color: "red" }, onChange: priceFilter, className: "form-select", "aria-label": "Default select example" },
                            React.createElement("option", { defaultValue: 'true' }, "Filter by price"),
                            React.createElement("option", { value: "1" }, "Descending"),
                            React.createElement("option", { value: "2" }, "Ascending"))),
                    React.createElement("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0" },
                        React.createElement("li", { className: "nav-item" },
                            React.createElement(Link, { to: "#", onClick: function () { return setOpen(true); }, className: "nav-link" },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "25", fill: "currentColor", className: "bi bi-plus-lg", viewBox: "0 0 16 16" },
                                    React.createElement("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" })))),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("div", { className: "nav-link", onClick: function () { return navigate("/cart"); } },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "25", fill: "currentColor", className: "bi bi-cart", viewBox: "0 0 16 16" },
                                    React.createElement("path", { d: "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" })))))))),
        React.createElement(NewProduct, { onClose: onClose, isOpen: isOpen })));
};
export default Header;
//# sourceMappingURL=Header.js.map