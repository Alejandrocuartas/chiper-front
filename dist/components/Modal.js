import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/Modal.css";
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children;
    if (!isOpen) {
        return null;
    }
    return ReactDOM.createPortal(React.createElement("div", { className: "Modal" },
        React.createElement("div", { className: "Modal__container" },
            React.createElement("button", { onClick: onClose, className: "Modal__close-button" }, "X"),
            children)), document.createElement("div"));
};
export default Modal;
//# sourceMappingURL=Modal.js.map