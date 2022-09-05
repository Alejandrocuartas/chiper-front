import * as React from "react";
var _a = require("react-router-dom"), Route = _a.Route, Routes = _a.Routes, BrowserRouter = _a.BrowserRouter;
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";
var App = function () {
    return (React.createElement(BrowserRouter, null,
        React.createElement(Layout, null,
            React.createElement(Routes, null,
                React.createElement(Route, { element: React.createElement(Home, null), path: "/" }),
                React.createElement(Route, { element: React.createElement(Cart, null), path: "/cart" })))));
};
export default App;
//# sourceMappingURL=App.js.map