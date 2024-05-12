import React from 'react'
import cl from "./Navbar.module.css"
import logo from '../../../styles/img/logo.jpg'
import NavbarButton from '../buttons/NavbarButton/NavbarButton'
import MyButton from '../buttons/MyButton/MyButton'

function Navbar() {
  return (
    <div className={cl.navbar}>
        <div className={cl.row}>
            <div className={cl.navbar__logo}>
                <img src= {logo}/>
            </div>
            <div className={cl.navbar__btns}>
                <NavbarButton text = "Why Savingz"/>
                <NavbarButton text = "Our Products"/>
                <NavbarButton text = "Customer Feedback"/>
                <NavbarButton text = "Blogs"/>
            </div>
            <div className={cl.navbar__other__btns}>
                <MyButton>FREE CA CALL</MyButton>
                <MyButton>DOWNLOAD THE APP</MyButton>
            </div>
            
        </div>
        
    </div>
    
  )
}

export default Navbar