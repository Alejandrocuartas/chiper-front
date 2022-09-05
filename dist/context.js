import * as React from "react";
var defaultPoduct = {
    _id: '',
    price: 0,
    description: '',
    name: '',
    bought: false
};
var defaultProps = {
    cart: [defaultPoduct],
    products: [defaultPoduct],
    setProducts: function (param) { },
    setCart: function (param) { }
};
var appContext = React.createContext(defaultProps);
var ContextAppProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState([]), products = _b[0], setProducts = _b[1];
    var _c = React.useState([]), cart = _c[0], setCart = _c[1];
    var defaultContext = {
        products: products,
        setProducts: function (newProducts) {
            setProducts(newProducts);
        },
        cart: cart,
        setCart: function (newCart) {
            setCart(newCart);
        },
    };
    return (React.createElement(appContext.Provider, { value: defaultContext }, children));
};
export var useGlobalContext = React.useContext(appContext);
export { ContextAppProvider, appContext };
//# sourceMappingURL=context.js.map