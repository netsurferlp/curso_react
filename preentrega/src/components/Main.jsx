import React from "react";
import { Routes, Route } from "react-router-dom";

import Product from "./Product";
import ProductDetail from "../components/ProductDetail";
import Home from "../pages/Home";
import Service from "../pages/Service";
import About from "../pages/About";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/curso_react/preentrega/" element={<Home />} />
        <Route path="/curso_react/preentrega/about" element={<About />} />
        <Route path="/curso_react/preentrega/product" element={<Product />} />
        <Route path="/curso_react/preentrega/service" element={<Service />} />
        <Route
          path="/curso_react/preentrega/product/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </>
  );
};

export default Main;
