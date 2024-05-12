import React from 'react'
import cl from './Footer.module.css'
import logo from '../../styles/img/logo.jpg'

function Footer() {
  return (
    <div className={cl.Footer__main}>
        <div className={cl.main}>
            <img className={cl.logo} src={logo} alt="" />
            <div className={cl.description}>
                Not having access to Financial Advisors should never be the reason for your financial burden. We at Savingz are proud to live by our motto, Finance Simplified.
            </div>
            <div className={cl.links}>
                <div className={cl.link}>
                    <img src="https://www.svgrepo.com/show/108614/linkedin.svg"/>
                </div>
                <div className={cl.link}>
                    <img src="https://cdn-icons-png.freepik.com/512/44/44589.png" alt="" />
                </div>
                <div className={cl.link}>
                    <img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-509x512-4hj4fl06.png" alt="" />
                </div>
            </div>
            <div className={cl.copyright}>
                Copyright © SAVINGZ SOLUTIONS PRIVATE LIMITED 2024
            </div>
        </div>
        <div className={cl.addition__main}>
            <div className={cl.information}>
                <div className={cl.title} href='http://www.example.com'>Company</div>
                <div className={cl.text__main}>
                    <div className={cl.text}>
                        <a className={cl.text} href='http://www.example.com'>Home</a>
                    </div>
                    <div className={cl.text}>
                        <a className={cl.text} href='http://www.example.com'>About us</a>
                    </div>
                    <div className={cl.text}>
                        <a className={cl.text} href='http://www.example.com'>Privacy Policy</a>
                    </div>
                    <div className={cl.text}>
                        <a className={cl.text} href='http://www.example.com'>Terms & Conditions</a>
                    </div>
                    <div className={cl.text}>
                        <a className={cl.text} href='http://www.example.com'>Compliance</a>
                    </div>
                </div>
            </div>
            <div className={cl.information}>
                <div className={cl.title} href='http://www.example.com'>Our Services</div>
                <div className={cl.text__main}>
                    <div className={cl.text}>
                        <a className={cl.text} href='http://www.example.com'>Tax Optimisation</a>
                    </div>
                    <div className={cl.text}>
                        <a className={cl.text} href='http://www.example.com'>Wealth Management</a>
                    </div>
                    <div className={cl.text}>
                        <a className={cl.text} href='http://www.example.com'>Alternate Investment</a>
                    </div>
                    <div className={cl.text}>
                        <a className={cl.text} href='http://www.example.com'>AI Finance</a>
                    </div>
                </div>
            </div>
            <div className={cl.information}>
                <div className={cl.title} href='http://www.example.com'>Contact Information</div>
                <div className={cl.text__main}>
                    <div className={cl.text}>
                        <p className={cl.text} href='http://www.example.com'>62/1, 9th Main Rd, Stage, Indiranagar, Bengaluru North, Bangalore- 560038</p>
                    </div>
                    <div className={cl.text}>
                        <p className={cl.text} href='http://www.example.com'>8608600419</p>
                    </div>
                    <div className={cl.text}>
                        <p className={cl.text} href='http://www.example.com'>hi@savingz.in</p>
                    </div>
                    <div className={cl.text}>
                        <p className={cl.text} href='http://www.example.com'>pr@savingz.in</p>
                    </div>
                    <div className={cl.text}>
                        <p className={cl.text} href='http://www.example.com'>Compliance</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer