import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Clock from "./Chapter_04/Clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
    root.render(
        <React.StrictMode>
            <Clock />
        </React.StrictMode>
    );
}, 1000);
