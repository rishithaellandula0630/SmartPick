import React from 'react'
import Navbar from '../Componenets/Navbar'
import Footer from '../Componenets/Footer'
import { oneplus } from '../../oneplus'
const Oneplus = () => {
  return (
    <>
    <Navbar/>
    <div className='d-flex flex-wrap'>
      {oneplus.map((item) => {
        return (
          <div class="ris">
            <img src={item.image} class="ris-img-top" alt=".."  height="200px" width="200px"/><br />
            {item.name}<br />
            <h6>{item.model}</h6>
            <h6>&#8377;{item.price}</h6>
          </div>

        )
      })}
    
    </div>
    <Footer/>
      </>
  )
}

export default Oneplus
