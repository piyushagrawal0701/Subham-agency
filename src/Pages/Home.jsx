import React from 'react'
import HeroSection from '../Components/HeroSection'
// import CTA from '../Components/CTA'
import Testimonial from '../Components/Testimonial'
import ServicesSection from '../Components/ServicesSection'
import OverviewSection from '../Components/OverviewSection'
import ToolsSection from '../Components/ToolsSection'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <ServicesSection/>
      <OverviewSection/>
      <ToolsSection/>
      <Testimonial/>
      {/* <CTA/> */}
    </>
  )
}

export default Home