import React from 'react'
import './hero.css'
import heroImg from '../assets/images/image-hero-desktop.png'
import heroImgMobile from '../assets/images/image-hero-mobile.png'
import audiophile from '../assets/images/client-audiophile.svg'
import databiz from '../assets/images/client-databiz.svg'
import maker from '../assets/images/client-maker.svg'
import meet from '../assets/images/client-meet.svg'

const Hero = () => {
    return (
        <div>
            <div className="heroSection">
                <div className="hero">
                    <div className="heroLeft">
                        <div className="heroLeftUp">
                            <img className='heroImgMobile' src={heroImgMobile} />
                            <h1>Make remote work</h1>
                            <p>Get your team in sync, no matter your location. Streamline processes,
                                create team rituals, and watch productivity soar.</p>
                            <button className='ctaBtn'>Learn more</button>

                        </div>
                        <div className="heroLeftDown">
                            <div className='clients'>
                                <img className='client' src={databiz} />
                                <img className='client' src={audiophile} />
                                <img className='client' src={meet} />
                                <img className='client' src={maker} />
                            </div>
                        </div>

                    </div>
                    <div className="heroRight">
                        <img className='heroImg' src={heroImg} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
