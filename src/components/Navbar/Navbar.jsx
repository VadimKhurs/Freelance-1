import React from 'react'
import cl from "./Navbar.module.css"
import logo from '../../styles/img/logo.jpg'


function Navbar() {
  return (
    <div className={cl.navbar}>
        <div className={cl.row}>
            <div className={cl.navbar__logo}>
                <img src= {logo}/>
            </div>
            <div className={cl.navbar__btns}>
                <div className={cl.navbar__btns__btn}>
                    <a style={{fontFamily:"Core Sans A 55 Medium"}}>Why Savingz</a>
                </div>
                <div className={cl.navbar__btns__btn}>
                    <a style={{fontFamily:"Core Sans A 55 Medium"}}>Why Savingz</a>
                </div>
                <div className={cl.navbar__btns__btn}>
                    <a style={{fontFamily:"Core Sans A 55 Medium"}}>Why Savingz</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar