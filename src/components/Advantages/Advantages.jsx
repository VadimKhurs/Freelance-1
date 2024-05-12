import React, { useState } from 'react'
import cl from './Advantages.module.css'
import AdvantagesBlock from './AdvantagesBlock'

import phone from '../../styles/img/banner.png'
import earn from '../../styles/img/earn.png'
import texas from '../../styles/img/texas.png'
import invest from '../../styles/img/invest.png'
import finance from '../../styles/img/finance.png'
import wealth from '../../styles/img/wealth.png'

function Advantages() {
	const imgs = [phone, earn, texas, invest, finance, wealth];

	const [currentNumber, setCurrentNumber] = useState(1); 

	return (
		<div className={cl.Advantages__main}>
			<div className={cl.left__block}>
				<AdvantagesBlock number={1} current={currentNumber} setHover={setCurrentNumber} side={'right'} title={'Invest in Fractions'} description={'Get industry leading returns without emptying your emergency fund'}/>
				<AdvantagesBlock number={2} current={currentNumber} setHover={setCurrentNumber}side={'right'} title={'Earn interest'} description={'Even on your referrals so you make money together, as it is supposed to be'}/>
				<AdvantagesBlock number={3} current={currentNumber} setHover={setCurrentNumber} side={'right'} title={'Taxes, US and AI'} description={'Optimize your tax returns with AI and India’s best financial advisors'}/>      
			</div>
			<div className={cl.center__block}>
				<div className={cl.circle__main}>
					<div className={cl.circle}/>
				</div>
				<div className={cl.phone__main}>
					<img className={cl.phone} src={imgs[currentNumber - 1]}/>
				</div>
			</div>
			<div className={cl.right__block}>
				<AdvantagesBlock number={4} current={currentNumber} setHover={setCurrentNumber} side={'left'} title={'Invest in business'} description={'Choose from the exclusive drop every week and get a chance to invest'}/>
				<AdvantagesBlock number={5} current={currentNumber} setHover={setCurrentNumber} side={'left'} title={'Finance Delivered!'} description={'Get handpicked juiciest finance news everyday with your morning coffee'}/>
				<AdvantagesBlock number={6} current={currentNumber} setHover={setCurrentNumber} side={'left'} title={'Wealth Simplified!'} description={'Exclusive access to save tax, do investment and much more'}/>        
			</div>  
			
		</div>  
  	)
}

export default Advantages