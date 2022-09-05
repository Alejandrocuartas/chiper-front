import * as React from "react";
import Modal from "./Modal";
import { useGlobalContext } from "../context";

import useProductCreator from "../hooks/useProductCreator";

const NewProduct = ({ isOpen, onClose }) => {
    const { setProducts } = useGlobalContext;
    const newProduct = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData(e.target);
            const products = await useProductCreator(formData);
            setProducts(products);
            onClose();
        } catch (error) {
            alert("There was an error");
            onClose();
        }
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={newProduct}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="productName"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">
                        Price
                    </label>
                    <input
                        name="price"
                        type="number"
                        className="form-control"
                        id="productPrice"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">
                        Description
                    </label>
                    <input
                        name="description"
                        type="text"
                        className="form-control"
                        id="productDescription"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDiscount" className="form-label">
                        Discount
                    </label>
                    <input
                        name="discount"
                        type="number"
                        className="form-control"
                        id="productDiscount"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productImage" className="form-label">
                        Image
                    </label>
                    <input
                        name="productImage"
                        type="file"
                        className="form-control"
                        id="productImage"
                    />
                </div>
                <button type="submit" className="btn btn-danger">
                    Submit
                </button>
            </form>
        </Modal>
    );
};

export default NewProduct;
