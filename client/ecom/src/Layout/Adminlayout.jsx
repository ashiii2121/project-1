import React from 'react'
import Navbar from '../Components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/common/Footer'

function Adminlayout() {
  return (
    <div>

        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Adminlayout