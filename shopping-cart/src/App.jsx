import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Products from "./Products";
import Photobook from "./Photobook";
import Career from "./Career";
import { Link, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import MakeUp from "./MakeUp";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home </Link>
        <Link to="/products">Products </Link>
        <Link to="/careers">Careers </Link>
        <Link to="/pictures">PhotoBook </Link>
        <Link to="/cart" className="cart">
          Cart
        </Link>
      </nav>
      <p>My Counter {count}</p>
      <Routes>
        <Route path="/" element={<Home setCount={setCount} count={count} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/pictures" element={<Photobook />} />
        <Route path="/products/makeup" element={<MakeUp />} />
      </Routes>
    </>
  );
}

export default App;
