import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import { ContextAppProvider } from "./context";

ReactDOM.render(
    <ContextAppProvider>
        <App />
    </ContextAppProvider>,
    document.getElementById("root")
);
