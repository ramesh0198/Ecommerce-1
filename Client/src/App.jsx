//App.jsx



import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Loginpage from './Pages/Loginpage/Loginpage'
import Register from './Pages/Registerpage/Register'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cartpage from './Pages/Homepage/Cartpage/Cartpage'
import { useAuthContext } from './Context/AuthContext'




export default function App() {
  const {user} = useAuthContext();


  return (
    <>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Homepage/>} />

      <Route
       path='/login' 
       element={user ? <Navigate to="/"/> : <Loginpage/>} /> 
      <Route 
        path='/register'
        element={user ? <Navigate to="/" /> :<Register/> } /> 

      <Route path='/cart' element ={<Cartpage />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      
    </Routes>
    </>
  )
}
