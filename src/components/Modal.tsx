import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/Modal.css";

const modalContainer = document.getElementById("modal");
let modal: HTMLElement;
if (modalContainer !== null) {
    modal = modalContainer;
}

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
        modal
    );
};

export default Modal;
