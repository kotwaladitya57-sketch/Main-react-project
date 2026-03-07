import React, { useState, useContext } from 'react'
import Navbar from './navbar'
import { FaPaperPlane } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import CartContext from './Cartcontext';


const Contact = () => {
    const { login } = useContext(CartContext);
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (!data.name || !data.email || !data.phone) return alert("All fields are required");
        login(data);
    }

    return (

        <div>
            <Navbar />
            <div class="form-wrapper">
                <h1 class='h1'>This is Log in page</h1>
                <div class="contact-form">

                    <form id="form">
                        <FaUser className="icon" size={30} style={{ marginRight: "6px", marginTop: "30px" }} />
                        <input id="name" type="text" placeholder="Name" onChange={(e) => setData({ ...data, name: e.target.value })} required /><br />
                        <FaEnvelope className="icon" size={30} style={{ marginRight: "6px" }} />
                        <input id="email" type="email" placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} required />
                        <FaPhoneAlt className="icon" size={30} style={{ marginRight: "6px" }} />
                        <input id="phone" type="tel" placeholder="Phone" maxLength={10} onChange={(e) => setData({ ...data, phone: e.target.value })} required /><br />
                        <button type="submit" id='btn' onClick={handleLoginSubmit}>Submit <FaPaperPlane style={{ marginRight: "6px" }} /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
