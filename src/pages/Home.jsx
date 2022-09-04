import React, { useContext, useEffect, useMemo, useState } from "react";
const { appContext } = require("../context");

import ProductCard from "../components/ProductCard";

import "./styles/Home.css";

const Home = () => {
    const { products, setProducts } = useContext(appContext);
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        fetch(`${process.env.API}/api/product`)
            .then((res) => res.json())
            .then((res) => setProducts(res.products));
    }, []);
    useMemo(() => {
        setProductsList(products);
    }, [products]);
    if (productsList.length === 0) {
        return <h1 style={{ color: "red" }}>Waiting for products</h1>;
    }
    return (
        <div className="products">
            {productsList.map((p) => (
                <ProductCard product={p} key={p._id}></ProductCard>
            ))}
        </div>
    );
};

export default Home;
