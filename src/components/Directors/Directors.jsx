import React from 'react'
import cl from './Directors.module.css'
import hardik from '../../styles/img/hardik.jpg'
import aanchal from '../../styles/img/aanchal.jpg'
import shubham from '../../styles/img/shubham.jpg'
import rounak from '../../styles/img/rounak.jpg'

function Directors() {
  return (
    <div className={cl.Directors__main}>
        <div className={cl.card__main}>
            <img src={hardik}/>
            <div>
                <div className={cl.title}>Hardik Lodha</div>
                <div className={cl.jobTitle}>Co- Founder, CEO</div>
                <div className={cl.company}>IIT Guwahati, Byjus, Flipkart</div>
            </div>
            <div className={cl.links}>
                <img src="https://www.svgrepo.com/show/108614/linkedin.svg"/>
                <img src="https://cdn-icons-png.freepik.com/512/44/44589.png" alt="" />
                <img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-509x512-4hj4fl06.png" alt="" />
            </div>
        </div>
        <div className={cl.card__main}>
            <img src={aanchal}/>
            <div>
                <div className={cl.title}>Aanchal Minda</div>
                <div className={cl.jobTitle}>Co-Founder, Chief CA</div>
                <div className={cl.company}>Ex Johnson and Johnson, L&T</div>
            </div>
            <div className={cl.links}>
                <img src="https://www.svgrepo.com/show/108614/linkedin.svg"/>
                <img src="https://cdn-icons-png.freepik.com/512/44/44589.png" alt="" />
                <img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-509x512-4hj4fl06.png" alt="" />
            </div>
        </div>
        <div className={cl.card__main}>
            <img src={shubham}/>
            <div>
                <div className={cl.title}>Shubham Jain</div>
                <div className={cl.jobTitle}>Co-Founder, COO</div>
                <div className={cl.company}>IIT Roorkee, Ex Newton School</div>
            </div>
            <div className={cl.links}>
                <img src="https://www.svgrepo.com/show/108614/linkedin.svg"/>
                <img src="https://cdn-icons-png.freepik.com/512/44/44589.png" alt="" />
                <img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-509x512-4hj4fl06.png" alt="" />
            </div>
        </div>
        <div className={cl.card__main}>
            <img src={rounak}/>
            <div>
                <div className={cl.title}>Rounak Baral</div>
                <div className={cl.jobTitle}>Co-Founder, CPO</div>
                <div className={cl.company}>IIT Guwahati, Ex DateSetGo</div>
            </div>
            <div className={cl.links}>
                <img src="https://www.svgrepo.com/show/108614/linkedin.svg"/>
                <img src="https://cdn-icons-png.freepik.com/512/44/44589.png" alt="" />
                <img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-509x512-4hj4fl06.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Directors