import React from 'react'
import cl from './NavbarButton.module.css'

function NavbarButton({text}) {
  return (
    <div className={cl.navbar__btns__btn}>
        <img className = {cl.navbar__arrow} src="https://www.shareicon.net/data/48x48/2015/12/02/681008_arrows_512x512.png" />
        <a>{text}</a>
    </div>
  )
}

export default NavbarButton;