import * as React from "react";
const { Link, useNavigate } = require("react-router-dom");
import NewProduct from "./newProduct";
import { useGlobalContext } from "../context";
import "./styles/Header.css";

const Header = () => {
    const navigate = useNavigate();
    const [query, setQuery] = React.useState(" ");
    const { products, setProducts } = useGlobalContext();
    const [isOpen, setOpen] = React.useState(false);
    const onClose = () => {
        setOpen(false);
    };
    const priceFilter = (e) => {
        const ascendingPrice = e.target.value == 2;
        if (ascendingPrice) {
            const productsList = products.sort((a, b) => {
                return a.price - b.price;
            });
            setProducts(productsList);
        }
        const descendingPrice = e.target.value == 1;
        if (descendingPrice) {
            const productsList = products.sort((a, b) => {
                return b.price - a.price;
            });
            setProducts(productsList);
        }
    };

    const onQuery = (e: any) => {
        setQuery(e.target.value);
        const result = products.filter((product) => {
            return `${product.name} ${product.description}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });
        setProducts(result);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid container-fluidff">
                    <Link className="navbar-brand" to="/">
                        <img
                            src="https://growth.chiper.co/static/media/chiper-logo.b02a6520d32de77f5cfaea94e3f7757b.svg"
                            alt="Chiper logo"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <form className="d-flex" role="search">
                            <input
                                onChange={onQuery}
                                className="form-control me-2"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <select
                                style={{ color: "red" }}
                                onChange={priceFilter}
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option defaultValue="true">
                                    Filter by price
                                </option>
                                <option value="1">Descending</option>
                                <option value="2">Ascending</option>
                            </select>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="#"
                                    onClick={() => setOpen(true)}
                                    className="nav-link"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="currentColor"
                                        className="bi bi-plus-lg"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div
                                    className="nav-link"
                                    onClick={() => navigate("/cart")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="currentColor"
                                        className="bi bi-cart"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <NewProduct onClose={onClose} isOpen={isOpen}></NewProduct>
        </div>
    );
};

export default Header;
