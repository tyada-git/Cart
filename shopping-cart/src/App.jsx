import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home';
import Products from './Products';
import { Link, Route, Routes } from 'react-router-dom';
import Cart from './Cart';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <nav className='navbar'>
     <Link to="/">Home </Link>
     <Link to="/products">Products</Link>
     <Link to="/cart" className ="cart">Cart</Link>
     </nav>
       
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
        </Routes>

    </>
  )
}

export default App
