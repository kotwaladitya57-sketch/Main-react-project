import { Routes, Route } from 'react-router-dom'
import Login from './Page/Login'
import Home from './Page/Home'
import About from './Page/About'
import React from 'react'
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
import { ToastContainer } from 'react-toastify'

function App() {

  return (
      <div >
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
        <ToastContainer />
      </div>
  )
}

export default App
