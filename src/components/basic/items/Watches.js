import products from "../../../api/products.json"
import React from 'react'

function Watches() {
  let filtered= products.filter((item)=>{
    return item.id===4}).map((items)=>{
      // console.log(items);
      return(
      <div className="">
     <img src={items.image} alt=""/>
     <h3>{items.title}</h3>
     </div> 
     )
    })
    return(
      <div className="mt-60">
      <h1>Watches</h1>
      {filtered}
     </div>
    )
}

export default Watches
