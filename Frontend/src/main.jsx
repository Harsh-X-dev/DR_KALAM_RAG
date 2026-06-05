import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { RouterProvider } from 'react-router-dom'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="dark">
      <App />
    </div>
  </StrictMode>,
);
