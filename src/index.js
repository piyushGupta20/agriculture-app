import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import App from './App';
// import About from "./About";
import About from './screens/About'
import Products from "./screens/Products";
import User from "./screens/User";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Farmers from "./screens/farmers";
import Seller from "./screens/Seller";


render( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="user" element={<Login/>} />
      <Route path="signup" element={<Register/>} />
      <Route path="farmers" element={<Farmers/>} />
      <Route path="sell" element={<Seller/>} />
      
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);