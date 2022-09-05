import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App.jsx";
import { ContextAppProvider } from "./context";

ReactDOM.render(
    <ContextAppProvider>
        <App />
    </ContextAppProvider>,
    document.getElementById("root")
);
