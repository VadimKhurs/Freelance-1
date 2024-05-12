import React from 'react'
import cl from './Banner.module.css'
import phone from '../../styles/img/banner.png'
import MyButton from '../UI/buttons/MyButton/MyButton';
import background from '../UI/buttons/MyButton/MyButton.module.css'
import FuncButton from '../UI/buttons/FuncButton/FuncButton'

function Banner() {
  
  return (
    <div className={cl.banner__container}>
      <div className={cl.row}>
        <div className={cl.banner}>
          <div className={cl.banner__text}>
            <p>WEALTH SIMPLIFIED</p>
          </div>
          <div className={cl.banner__bold__text}>
            <h1 style={{fontWeight:"normal"}}>Manage </h1>
            <h1>Taxes + Wealth</h1>
          </div>
          <div className={cl.banner__bold__text}>
            <h1 style={{fontWeight:"normal"}}>With </h1>
            <h1>AI +</h1>
            <h1 style={{fontWeight:"normal"}}>India's </h1>
            <h1>best Financial</h1>
          </div>
          <div className={cl.banner__bold__text}>
            <h1>Advisors</h1>
          </div>
          <div className={cl.banner__description}>
            <p>Maximize your financial potential with expert guidance and cuttin-edge AI technology, tailored specifically for the Indian market</p>
          </div>
          <div className={cl.MyButton}>
            <MyButton  bg = {background.MyButton__bg1}>SAVE YOUR TAXES</MyButton>
          </div>
          <FuncButton/>
        </div>
        <img className={cl.phone} src={phone}/>
      </div>
    </div>
  )
}

export default Banner;