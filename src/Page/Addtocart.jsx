import React, { useContext } from 'react'
import Navbar from './navbar'
import CartContext from './Cartcontext'
import { FaOpencart } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";


const Addtocart = () => {
  const { cart, removeItemFromCart } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      <h1 className='h1'>Add to Cart</h1>
    <FaOpencart id='icon' />
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>Your cart is empty.</p>
      ) : (
        <div style={{ padding: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {cart.map(item => (
            <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', display: 'flex', gap: '20px', alignItems: 'center', width: '80%', maxWidth: '600px' }}>
              <img src={item.thumbnail} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <div>
                <h2>{item.title}</h2>
                <h3>Price: <FaIndianRupeeSign />{item.price}</h3>
              </div>
              <p>Quantity: {item.quantity || 1}</p>
              <button id='btnR' onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Addtocart
