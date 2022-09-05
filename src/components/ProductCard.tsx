import * as React from "react";
import ProductInfo from "./ProductInfo";
import { useGlobalContext } from "../context";
import "./styles/ProductCard.css";

const ProductCard = ({ product }) => {
    const { cart, setCart } = useGlobalContext;
    const [isOpen, setOpen] = React.useState(false);
    const onClose = () => {
        setOpen(false);
    };
    const addProduct = () => {
        product.bought = true;
        setCart([...cart, product]);
    };
    return (
        <div>
            <div className="card" onClick={() => setOpen(true)}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="product-info">
                        <h4>{product.name}</h4>
                        <div className="product-price">
                            <div>
                                $<strong>{product.price}</strong>
                            </div>
                            {product.discount ? (
                                <div>
                                    <strong>-{product.discount}%</strong>
                                    <div>
                                        $
                                        <strong>
                                            {((100 - product.discount) / 100) *
                                                product.price}
                                        </strong>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    {product.bought ? (
                        <button
                            type="button"
                            className="btn btn-danger disabled"
                        >
                            Add
                        </button>
                    ) : (
                        <button
                            onClick={addProduct}
                            type="button"
                            className="btn btn-danger"
                        >
                            Add
                        </button>
                    )}
                </div>
            </div>
            <ProductInfo
                onClose={onClose}
                isOpen={isOpen}
                product={product}
            ></ProductInfo>
        </div>
    );
};

export default ProductCard;

("https://pm1.narvii.com/6821/33aed0f2602deba81979f099263597de3a645492v2_hq.jpg");
