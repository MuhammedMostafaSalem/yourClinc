import React from 'react'
import Hero from '../Components/Home/Hero'
import HeroServices from '../Components/Home/HeroServices'
import ShortStory from '../Components/Home/ShortStory'
import Services from '../Components/Home/Services'
import AboutUs from '../Components/Home/AboutUs'
import Doctor from '../Components/Home/Doctor'

const HomePage = () => {
    return (
        <div>
            <Hero id="hero"/>
            <HeroServices/>
            <ShortStory/>
            <Services id="services"/>
            <AboutUs id="aboutus"/>
            <Doctor id="doctor"/>
        </div>
    )
}

export default HomePage