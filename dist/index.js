import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App.jsx";
import { ContextAppProvider } from "./context";
ReactDOM.render(React.createElement(ContextAppProvider, null,
    React.createElement(App, null)), document.getElementById("root"));
//# sourceMappingURL=index.js.map