// Import Libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Import Components
import App from "./App";
// Import CSS Files
import "./Styles/App.css"


createRoot( document.getElementById( "main-body" )! ).render(
    <StrictMode>
        <App />
    </StrictMode>
);