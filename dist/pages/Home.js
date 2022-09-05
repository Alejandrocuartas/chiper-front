import * as React from "react";
import ProductCard from "../components/ProductCard";
import { useGlobalContext } from "../context";
import "./styles/Home.css";
var Home = function () {
    var products = useGlobalContext.products, setProducts = useGlobalContext.setProducts;
    React.useEffect(function () {
        fetch("".concat(process.env.API, "/api/product"))
            .then(function (res) { return res.json(); })
            .then(function (res) {
            setProducts(res.products);
        });
    }, []);
    if (products.length === 0) {
        return React.createElement("h1", { style: { color: "red" } }, "Waiting for products");
    }
    return (React.createElement("div", { className: "products" }, products.map(function (p) { return (React.createElement(ProductCard, { product: p, key: p._id })); })));
};
export default Home;
//# sourceMappingURL=Home.js.map