import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './navbar'
import { FaIndianRupeeSign } from "react-icons/fa6";


const Deatil = () => {
    const { id } = useParams()

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [id]);

    if (data == null) {
        return <h1>Loading...</h1>
    }


    return (
        <div>
            <Navbar />
            <h1 id='h1'>Product Detail {id}</h1>
            <div style={{
                width: "80%",
                margin: "auto",
                padding: "20px",
                display: "flex",
                gap: "20px"
            }}>
                <div style={{ flex: 1 }}>
                    <img style={{ width: "100%", borderRadius: "15px" }} src={data.thumbnail} alt={data.title} />
                    <div style={{ display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
                        {data.images && data.images.slice(0, 5).map((img, index) => (
                            <img key={index} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }} src={img} alt={`${data.title} ${index + 1}`} />
                        ))}
                    </div>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
                    <h2 id='h1'>{data.title}</h2>
                    <h2>Category: {data.category}</h2>
                    <h3>Price: <FaIndianRupeeSign />{data.price}</h3>
                    <p>{data.description}</p>
                    <h4>Rating: {data.rating} / 5</h4>
                    <button id='btn' onClick={(e) => handleAddToCart(e, data)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Deatil
