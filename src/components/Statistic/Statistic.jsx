import React from 'react'
import cl from './Statistic.module.css'

function Statistic() {
  return (
    <div className={cl.Statistic__main}>
        <div className={cl.Statistic}>
            <div className={cl.title}>
                <h1>2500+</h1>
                <p>Total customers</p>
            </div>
            <div className={cl.title}>
                <h1>3000+</h1>
                <p>Trusted by</p>
            </div>
            <div className={cl.title}>
                <h1>11CR+</h1>
                <p>Tax saved</p>
            </div>
            <div className={cl.title}>
                <h1>ZERO</h1>
                <p>Customer Accustion Cost</p>
            </div>
        </div>
    </div>
  )
}

export default Statistic