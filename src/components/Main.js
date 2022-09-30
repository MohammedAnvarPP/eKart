import products from "../api/products.json"
import React from 'react'
import './component.css'
import Header from "../components/basic/Header"
import Footer from "./basic/Footer";
import Body from "../components/basic/Body"
function Main() {
  return (
    <div>
    <Header/>
    <Body/>
    <Footer/>
    </div>
  )
}

export default Main
