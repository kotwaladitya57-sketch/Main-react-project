import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from './Cartcontext';
// import { FaSearch } from 'react-icons/fa';
import { FcSearch } from "react-icons/fc";
import { IoIosLogIn } from "react-icons/io";
import { MdRoundaboutRight } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
// import products from '../data.js';

const Navbar = () => {
  const [inputvalue, setInputValue] = React.useState("");
  const [searchedProducts, setSearchedProducts] = React.useState([]);
  const { cart, products, isLoggedIn, logout, user } = useContext(CartContext);

  function handleChange(e) {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setSearchedProducts([]);
      return;
    }
    const filtered = products.filter(product => product.title.toLowerCase().startsWith(e.target.value.toLowerCase()));
    setSearchedProducts(filtered);
  }

  return (
    <>
      <div style={{
        height: "60px",
        width: "100%",
        display: "flex",
        textAlign: "center",
        justifyContent: "space-around",
        fontSize: "20px",
        paddingTop: "10px",
         background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
        // borderRadius: "20px",
        paddingBottom: "10px",
        marginTop: "0px"
      }}>

        <Link to="/product" class='h1'><FaShoppingBag size={25} style={{ marginRight: "6px" }} />Products</Link>
        <div class='search-var'>
          <FcSearch style={{ position: "absolute", marginLeft: "10px", marginTop: "5px", paddingBottom: "5px", height: "30px", width: "30px" }} />
          <input value={inputvalue} onChange={handleChange} type="text" placeholder="      Search for Products, Brands and More" name="search2"></input>
        </div>

        {/* <Link to="/" id='h1'>Home</Link> */}
        <Link to="/about" class='h1' style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "25px" }}><MdRoundaboutRight size={25} />About</Link>
        {isLoggedIn ? (
          <>
            <span className='h1' style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "25px", color: 'inherit', fontSize: 'inherit' }}>Welcome, {user?.name.split(' ')[0]}</span>
            <button onClick={logout} className='h1' style={{ background: 'none', border: 'none', cursor: 'pointer', display: "flex", alignItems: "center", gap: "5px", marginBottom: "25px", color: 'inherit', fontSize: 'inherit' }}><IoIosLogIn size={25} />Logout</button>
          </>
        ) : (
          <Link to="/Login" class='h1' style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "25px" }}><IoIosLogIn size={25} />Log In</Link>
        )}
        <Link to="/addtocart" class='h1' style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "25px" }}><IoIosCart size={25} />Add to Cart ({cart.length})</Link>


      </div>
      <div style={{ background: "linear-gradient(90deg, #ff7e5f, #feb47b)", position: "absolute", top: "60px", width: "98.3%", paddingTop: "20px", paddingLeft: "30px", marginTop: "0px" }}>
        {searchedProducts.length > 0 && (
          <div style={{  display: "flex", flexDirection: "column", gap: "10px" }}>
            {searchedProducts.map(product => (
              <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                {product.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
