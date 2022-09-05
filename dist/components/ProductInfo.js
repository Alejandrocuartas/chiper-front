var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from "react";
import Modal from "./Modal";
import { useGlobalContext } from "../context";
import useDataUpdater from "../hooks/useDataUpdater";
import useDeleter from "../hooks/useDeleter";
import "./styles/ProductInfo.css";
var ProductInfo = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, product = _a.product;
    var setProducts = useGlobalContext.setProducts;
    var _b = React.useState(false), editMode = _b[0], setEditMode = _b[1];
    var _c = React.useState({}), bodyUpdater = _c[0], setBodyUpdater = _c[1];
    var editData = function (e) {
        var _a;
        setBodyUpdater(__assign(__assign({}, bodyUpdater), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var updateData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newProducts, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, useDataUpdater(product._id, bodyUpdater)];
                case 1:
                    newProducts = _a.sent();
                    setProducts(newProducts);
                    setEditMode(false);
                    onClose();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    alert("There was an error");
                    onClose();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var deleteProduct = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newProducts, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, useDeleter(product._id)];
                case 1:
                    newProducts = _a.sent();
                    setProducts(newProducts);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    alert("There was an error");
                    onClose();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(Modal, { isOpen: isOpen, onClose: onClose },
        React.createElement("div", { className: "product_info_card", style: { width: "18rem" } },
            React.createElement("div", null, editMode ? (React.createElement("input", { name: "name", onChange: editData, placeholder: "New name", type: "text" })) : (React.createElement("h1", null, product.name))),
            React.createElement("hr", null),
            React.createElement("div", null,
                React.createElement("ul", null,
                    editMode ? (React.createElement("div", null,
                        React.createElement("li", { className: "list-group-item" },
                            React.createElement("input", { name: "description", onChange: editData, type: "text", placeholder: "New description" })),
                        React.createElement("li", { className: "list-group-item" },
                            React.createElement("input", { name: "price", onChange: editData, type: "number", placeholder: "New price" })),
                        React.createElement("li", { className: "list-group-item" },
                            React.createElement("input", { name: "discount", onChange: editData, type: "number", placeholder: "New discount" })),
                        React.createElement("button", { onClick: updateData, className: "btn mb-2" }, "Submit"))) : (React.createElement("div", null,
                        React.createElement("li", { className: "list-group-item" },
                            React.createElement("h5", null, "Description:"),
                            React.createElement("p", null, product.description)),
                        React.createElement("li", { className: "list-group-item" },
                            React.createElement("h5", null, "Price:"),
                            React.createElement("p", null,
                                "$",
                                product.price)),
                        React.createElement("li", { className: "list-group-item" },
                            React.createElement("h5", null, "Discount:"),
                            React.createElement("p", null,
                                product.discount,
                                "%")))),
                    React.createElement("li", { className: "list-group-item" },
                        React.createElement("div", { className: "form-check form-switch" },
                            React.createElement("input", { onClick: function () { return setEditMode(!editMode); }, className: "form-check-input", type: "checkbox", id: "flexSwitchCheckChecked" }),
                            React.createElement("label", { className: "form-check-label", htmlFor: "flexSwitchCheckChecked" }, "Edit info"))),
                    React.createElement("li", { className: "list-group-item" },
                        React.createElement("button", { onClick: deleteProduct, className: "btn-danger btn" }, "Delete")))))));
};
export default ProductInfo;
//# sourceMappingURL=ProductInfo.js.map