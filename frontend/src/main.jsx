import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Simulaciones from "./pages/Simulaciones";
import Podcast from "./pages/Podcast";
import Appmovil from "./pages/appmovil";
import Investigaciones from "./pages/investigaciones";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/simulaciones" element={<Simulaciones />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/appmovil" element={<Appmovil />} />
      <Route path="/investigaciones" element={<Investigaciones />} />
    </Routes>
  </BrowserRouter>
);
