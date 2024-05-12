import React from 'react'
import MyButtonConviction from '../UI/buttons/MyButton/MyButtonConviction'
import cl from './Conviction.module.css'

function Conviction({title, description, buttonText}) {
  return (
    <div className={cl.Conviction__main}>
        <div className={cl.title}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div className={cl.Button}>
            <MyButtonConviction>{buttonText}</MyButtonConviction>
        </div>
    </div>
  )
}

export default Conviction