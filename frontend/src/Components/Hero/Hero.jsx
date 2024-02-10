import React from 'react'
import './Hero.css'
import hand from '../Assets/hand_icon.png'
import hero from '../Assets/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>New</p>
                    <img src={hand} alt=''/>
                </div>
                <p>Collections</p>
                <p>For everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>
                    <div>Latest Collections</div>
                </div>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero} alt=''/>
        </div>
    </div>

  )
}

export default Hero