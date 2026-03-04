import React from 'react'
import Navbar from './Page/navbar'
import { Outlet, Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div>
            <Navbar />

            <div style={{
                display:"flex",
                gap:"10px"
            }}>
                <div style={{
                    height: "600px",
                    width: "300px",
                    backgroundColor: "lightcoral",
                    display: "flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center"
                }}>



                    <Link to='/song/hindi'><li style={{height:"40px", width:"100px"}}>Hindi</li></Link>
                    <Link to='/song/english'><li style={{height:"40px", width:"100px"}}>English</li></Link>
                    <Link to='/song/pahari'><li style={{height:"40px", width:"100px"}}>Pahari</li></Link>

                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Sidebar
