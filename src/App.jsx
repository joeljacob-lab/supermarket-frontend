import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

import AddProduct from "./components/AddProduct";
import ViewProducts from "./components/ViewProducts";

import AddCustomer from "./components/AddCustomer";
import ViewCustomer from "./components/ViewCustomer";

import AddOffer from "./components/AddOffer";
import ViewOffer from "./components/ViewOffer";

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Product */}
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/viewproducts" element={<ViewProducts />} />

        {/* Customer */}
        <Route path="/addcustomer" element={<AddCustomer />} />
        <Route path="/viewcustomer" element={<ViewCustomer />} />

        {/* Offer */}
        <Route path="/addoffer" element={<AddOffer />} />
        <Route path="/viewoffer" element={<ViewOffer />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;