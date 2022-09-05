import * as React from "react";

import ProductCard from "../components/ProductCard";
import { useGlobalContext } from "../context";

import "./styles/Home.css";

const Home = () => {
    const { products, setProducts, socket } = useGlobalContext();

    React.useEffect(() => {
        socket.on("get-products", (res) => {
            setProducts(res.products);
        });
    }, []);

    if (products.length === 0) {
        return <h1 style={{ color: "red" }}>Waiting for products</h1>;
    }
    return (
        <div className="products">
            {products.map((p) => (
                <ProductCard product={p} key={p._id}></ProductCard>
            ))}
        </div>
    );
};

export default Home;
