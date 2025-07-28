import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainContextProvider } from "./context/MainContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContextProvider>
      <BrowserRouter basename="/Source">
        <App />
      </BrowserRouter>
    </MainContextProvider>
  </StrictMode>
);
