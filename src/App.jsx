import { Routes, Route } from 'react-router-dom'
import Login from './Page/Login'
import Home from './Page/Home'
import About from './Page/About'
import Navbar from './Page/navbar'
import React, { useState, createContext, useEffect } from 'react'
import Notfound from './Notfound'
import Paharisong from './Page/Paharisong'
import Englishsong from './Page/Englishsong'
import Hindisong from './Page/Hindisong'
import Songs from './Page/Songs'
import Sidebar from './Sidebar'
import Products from './Page/Product'
import Deatil from './Page/Deatil'
import './Page/Page.css'
import Addtocart from './Page/Addtocart'

export const CartContext = createContext(null);

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);


  const addToCart = (e, product) => {
    e.preventDefault();
    // Add logic to avoid adding duplicate items
    setCart(currentCart => {
      if (currentCart.find(item => item.id === product.id)) {
        alert("Item is already in the cart!");
        return currentCart;
      }
      return [...currentCart, product];
    });
  };

  const removeItemFromCart = (Id) => {
    setCart(currentCart => currentCart.filter(ele => ele.id !== Id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItemFromCart, products }}>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/product' element={<Products />} />
          <Route path='/product/:id' element={<Deatil />} />
          <Route path='/addtocart' element={<Addtocart />} />

          {/* <Route path='/songs' element={<Songs />} /> 
          <Route path='/hindisong' element={<Hindisong />} /> 
          <Route path='/englishsong' element={<Englishsong />} /> 
          <Route path='/paharisong' element={<Paharisong />} />  */}
   
          {/* <Route path='/song' element={<Sidebar />} >
            <Route index element={<Songs />} />
            <Route path='hindi' element={<Hindisong />} />
            <Route path='english' element={<Englishsong />} />
            <Route path='pahari' element={<Paharisong />} />
          </Route> */}

          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
    </CartContext.Provider>
  )
}

export default App
