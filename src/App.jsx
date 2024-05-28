import React from "react";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:url' element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
