import * as React from "react";
import Modal from "./Modal";
import { useGlobalContext } from "../context";

import useDataUpdater from "../hooks/useDataUpdater";
import useDeleter from "../hooks/useDeleter";

import "./styles/ProductInfo.css";

const ProductInfo = ({ isOpen, onClose, product }) => {
    const { setProducts } = useGlobalContext;
    const [editMode, setEditMode] = React.useState(false);
    const [bodyUpdater, setBodyUpdater] = React.useState({});

    const editData = (e) => {
        setBodyUpdater({ ...bodyUpdater, [e.target.name]: e.target.value });
    };

    const updateData = async () => {
        try {
            const newProducts = await useDataUpdater(product._id, bodyUpdater);
            setProducts(newProducts);
            setEditMode(false);
            onClose();
        } catch (error) {
            alert("There was an error");
            onClose();
        }
    };

    const deleteProduct = async () => {
        try {
            const newProducts = await useDeleter(product._id);
            setProducts(newProducts);
        } catch (error) {
            alert("There was an error");
            onClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="product_info_card" style={{ width: "18rem" }}>
                <div>
                    {editMode ? (
                        <input
                            name="name"
                            onChange={editData}
                            placeholder="New name"
                            type="text"
                        />
                    ) : (
                        <h1>{product.name}</h1>
                    )}
                </div>
                <hr />
                <div>
                    <ul>
                        {editMode ? (
                            <div>
                                <li className="list-group-item">
                                    <input
                                        name="description"
                                        onChange={editData}
                                        type="text"
                                        placeholder="New description"
                                    />
                                </li>
                                <li className="list-group-item">
                                    <input
                                        name="price"
                                        onChange={editData}
                                        type="number"
                                        placeholder="New price"
                                    />
                                </li>
                                <li className="list-group-item">
                                    <input
                                        name="discount"
                                        onChange={editData}
                                        type="number"
                                        placeholder="New discount"
                                    />
                                </li>
                                <button
                                    onClick={updateData}
                                    className="btn mb-2"
                                >
                                    Submit
                                </button>
                            </div>
                        ) : (
                            <div>
                                <li className="list-group-item">
                                    <h5>Description:</h5>
                                    <p>{product.description}</p>
                                </li>
                                <li className="list-group-item">
                                    <h5>Price:</h5>

                                    <p>${product.price}</p>
                                </li>
                                <li className="list-group-item">
                                    <h5>Discount:</h5>

                                    <p>{product.discount}%</p>
                                </li>
                            </div>
                        )}
                        <li className="list-group-item">
                            <div className="form-check form-switch">
                                <input
                                    onClick={() => setEditMode(!editMode)}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckChecked"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexSwitchCheckChecked"
                                >
                                    Edit info
                                </label>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <button
                                onClick={deleteProduct}
                                className="btn-danger btn"
                            >
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </Modal>
    );
};

export default ProductInfo;
