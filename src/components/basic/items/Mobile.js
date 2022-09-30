import products from "../../../api/products.json"
import "./items.css"
import React from 'react'

function Mobile() {
 let filtered= products.filter((item)=>{
    return item.id===1}).map((items)=>{
      console.log(items);
      return(
        <div className="">
     <img src={items.image} alt=""/>
     <h3>{items.title}</h3>
     </div> 
     )
    })
    return(
      <div className="mt-60">
      <h1>Mobile</h1>

      {filtered}
     </div>
    )
  }
   

export default Mobile
