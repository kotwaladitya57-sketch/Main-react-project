import React, { useContext } from 'react'
import Navbar from './navbar'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../App'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";


const Products = () => {

    const { addToCart, products } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddToCart = (e, product) => {
        addToCart(e, product);
        alert(`${product.title} has been added to the cart!`);
    }

    const gotoLogin = (e) => {
        e.preventDefault();
        navigate('/Login');
    }

    return (
        <div>
            <Navbar />
            <h1 className='h1'>Products</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",


            }}>

                {
                    products.map((ele) => {
                        return (

                            <Link to={`/product/${ele.id}`} key={ele.id} className='link'>
                                <div ><img className='image' src={ele.thumbnail} alt="" /></div>
                                <div className='main-text'>
                                    <h2 className='h1'>{ele.title}</h2>
                                    <h2>Category : {ele.category}</h2>
                                    <h3>Price : <FaIndianRupeeSign /> {ele.price}</h3>
                                    <p>{ele.description}</p>
                                    <div className='button-group'>
                                        <button className='btn1' onClick={gotoLogin}>Buy Now <FaShopify size={23} style={{ marginRight: "6px" }} /> </button>
                                        <button className='btn2' onClick={(e) => handleAddToCart(e, ele)}>Add to Cart <FaShoppingCart size={24} style={{ marginRight: "6px", color: "black" }} /> </button>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Products

    