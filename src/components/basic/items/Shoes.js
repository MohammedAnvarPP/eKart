import products from "../../../api/products.json"

import React from 'react'

function Shoes() {
  let filtered= products.filter((item)=>{
    return item.id===3}).map((items)=>{
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
      <h1>Shoes</h1>
      {filtered}
     </div>
    )
}

export default Shoes