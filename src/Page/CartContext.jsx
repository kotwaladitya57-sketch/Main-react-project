import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartContext = createContext();

export default CartContext;

const CartProvider = ({ children }) => {

    const navigate = useNavigate();

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

        if (cart.find(item => item.id === product.id)) {
            setCart(cart.map(ele => {
                if (ele.id === product.id) {
                    return { ...ele, quantity: ele.quantity + 1 }
                } else { return ele; }
            }))
            // alert(`${product.title} has been added to the cart!`);

        } else {
            setCart([...cart, { ...product, quantity: 1 }])
            toast.success(`${product.title} has been added to the cart!`, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    };

    const removeItemFromCart = (Id) => {
        setCart(currentCart => currentCart.filter(ele => ele.id !== Id));
    };

    const login = (userData) => {
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", "true");
        toast.success("LogIn successfully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        navigate('/product');
    };



    const gotoLogin = (e) => {
        e.preventDefault();
        navigate('/Login');
    };


    return (
        <CartContext.Provider value={{ products, cart, addToCart, removeItemFromCart, gotoLogin, login }}>
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider };