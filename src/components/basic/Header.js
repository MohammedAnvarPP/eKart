import React from 'react'
import "./basic.css"

function header() {
  return (
    <div className='header'>
        <h2>eKart</h2>
        <div className='header-list '>
          <ul className='header-ul'>
         <a href=""><li>Home</li></a>
          <a href=""><li>Cart</li></a>
            <a href=""><li>Favourite</li></a>
            <a href=""><li>Contact Us</li></a>
          </ul>
           
        </div>
    </div>
  )
}

export default header
