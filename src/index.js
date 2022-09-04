import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import { Context } from "./context";

ReactDOM.render(
    <Context>
        <App />
    </Context>,
    document.getElementById("root")
);
