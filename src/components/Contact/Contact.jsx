import React from 'react'
import cl from './Contact.module.css'
import photo from '../../styles/img/banner.png'

function Contact() {
  return (
    <div className={cl.contact__main}>
        <div className={cl.title__main}>
            <div className={cl.title}>
                Contact us
            </div>
            <div className={cl.description}>
                We are always looking forward to hear about problems, ideas and many more
            </div>
        </div>
        <div className={cl.phones1}>
            <img src={photo} />
        </div>
        <div className={cl.phones2}>
            <img src={photo} />
        </div>
    </div>
  )
}

export default Contact