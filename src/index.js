import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import App from './App';
// import About from "./About";
import About from './screens/About'
import Login from './screens/Login'
import Products from "./screens/Products";
import User from "./screens/User";

render( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="user" element={<User/>} />
      
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);