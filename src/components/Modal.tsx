import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button onClick={onClose} className="Modal__close-button">
                    X
                </button>
                {children}
            </div>
        </div>,
        document.createElement("div")
    );
};

export default Modal;
