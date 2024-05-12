import React from 'react'
import cl from './MyButton.module.css'

function MyButtonConviction({children}) {
  return (
    <a href='http://www.example.com'>
      <div className={cl.MyButtonConviction}>
          <div className={cl.vertical__center}>
              <p>{children}</p> 
              <img className = {cl.MyButtonConviction__arrow} src="https://www.shareicon.net/data/48x48/2015/12/02/681008_arrows_512x512.png" />
          </div>
      </div>
    </a>
  )
}

export default MyButtonConviction