import React from 'react'
import cl from './Companies.module.css'
import delhivery from '../../styles/img/delhivery.png'
import nvidia from '../../styles/img/nvidia.png'
import flipkart from '../../styles/img/flipkart.png' 
import meesho from '../../styles/img/meesho.png'
import razopray from '../../styles/img/razopray.png'

function Companies({children}) {
  return (
    <div className={cl.companies__main}>
        <div className={cl.companies__container}>
            <p>{children}</p>
            <div className={cl.companies}>
                <img src={delhivery} />
                <img src={nvidia} />
                <img src={flipkart} />
                <img src={meesho} />
                <img src={razopray} />
            </div>
        </div>
       
    </div>
  )
}

export default Companies