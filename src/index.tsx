import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./app";

const element = document.querySelector('body');

ReactDOM.render(
    (
        <StrictMode>
            <App />
        </StrictMode>
    ), element);