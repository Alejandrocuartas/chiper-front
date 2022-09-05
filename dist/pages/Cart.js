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
var useNavigate = require("react-router-dom").useNavigate;
import CartItem from "../components/CartItem";
import { useGlobalContext } from "../context";
import "./styles/Cart.css";
var Cart = function () {
    var navigate = useNavigate();
    var cart = useGlobalContext.cart, setCart = useGlobalContext.setCart;
    var cartPrices = cart.map(function (i) {
        if (i.discount) {
            var total = ((100 - i.discount) * i.price) / 100;
            return total;
        }
        else {
            return i.price;
        }
    });
    var buyProducts = function () {
        var ids = cart.map(function (i) { return i._id; });
        for (var idProduct in ids) {
            fetch("".concat(process.env.API, "/api/product/buy/").concat(ids[idProduct]), {
                method: "PATCH",
            })
                .then(function (res) { return __awaiter(void 0, void 0, void 0, function () {
                var resText;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!res.ok) return [3 /*break*/, 2];
                            return [4 /*yield*/, res.json()];
                        case 1:
                            resText = _a.sent();
                            throw new Error(resText.error);
                        case 2: return [2 /*return*/];
                    }
                });
            }); })
                .catch(function (err) { return console.log(err); });
        }
        setCart([]);
        alert("Product bought");
        navigate("/");
    };
    if (cart.length === 0) {
        return React.createElement("h1", { style: { color: "red" } }, "The cart is empty");
    }
    return (React.createElement("ul", { className: "list-group" },
        cart.map(function (item) {
            return (React.createElement("li", { key: item._id, className: "list-group-item mb-2 list_cart_products" },
                React.createElement(CartItem, { product: item })));
        }),
        React.createElement("li", { key: "nkbj", className: "list-group-item mb-2 d-flex justify-content-between list_cart_products" },
            React.createElement("div", null,
                "Total Price: $",
                cartPrices.reduce(function (p, c) { return p + c; }))),
        React.createElement("button", { onClick: buyProducts, className: "btn btn-danger" }, "Buy")));
};
export default Cart;
//# sourceMappingURL=Cart.js.map