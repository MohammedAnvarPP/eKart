import React from 'react'
import "./basic.css"
import Products from "../../api/products.json"
import MobileCard from '../cards/MobileCard'
import DressCard from '../cards/DressCard'
import ShoeCard from '../cards/ShoeCard'
import WatchesCard from '../cards/WatchesCard'
function body() {
//  let li= Products.filter((item)=>{
//    return item.id==0}).map((items,index)=>{
//     return (
//       <div className=''>
//         {items.category.map((aa)=>{
//           return(
//             <div >
//              <div>
//              </div>
//             <li className='li-div'>{aa}</li>
//             </div>
//           )
//         })}
//     </div>
//     )
   
  
//    })    
  return (
    <div className='div-li'>
      {/* {li} */}
         <MobileCard/>
      <DressCard/>
      <ShoeCard/>
      <WatchesCard/> 
    </div>
  )
}

export default body
