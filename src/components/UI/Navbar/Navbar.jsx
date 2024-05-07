import React from 'react'
import cl from "./Navbar.module.css"
import logo from '../../../styles/img/logo.jpg'
import NavbarButton from '../buttons/NavbarButton/NavbarButton'


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
                
                <div className={cl.MyButton}>
                    <div className={cl.vertical__center}>
                        <a>FREE CA CALL</a>
                        <img className = {cl.MyButton__arrow} src="https://www.shareicon.net/data/48x48/2015/12/02/681008_arrows_512x512.png" />

                    </div>
                </div>
                <div className={cl.MyButton}>
                    <div className={cl.vertical__center}>
                        <a>DOWNLOAD THE APP</a>
                        <img className = {cl.MyButton__arrow} src="https://www.shareicon.net/data/48x48/2015/12/02/681008_arrows_512x512.png" />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar