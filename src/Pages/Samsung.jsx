import React from 'react'
import { samsung } from '../../sam'
import Navbar from '../Componenets/Navbar'
import Footer from '../Componenets/Footer'
const Samsung = () => {
  return (
    <>
    <Navbar/>
    <div className='d-flex flex-wrap'>
      {samsung.map((item) => {
        return (
          <div class="ris">
            <img src={item.image} class="ris-img-top" alt=".." height="200px" width="200px"/><br />
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
export default Samsung