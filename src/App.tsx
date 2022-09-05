import * as React from "react";
const { Route, Routes, BrowserRouter } = require("react-router-dom");

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<Home />} path="/"></Route>
                    <Route element={<Cart />} path="/cart"></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
