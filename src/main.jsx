import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Donate from "./components/Donate/Donate.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
);
