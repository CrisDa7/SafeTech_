import React, { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div className="p-6">Cargando…</div>}>
      <App />
    </Suspense>
  </StrictMode>
);
