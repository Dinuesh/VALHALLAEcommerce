import React from 'react'
import Navbar from './Components/Navbar'
import UserRegistration from './Components/UserRegistration'
import GalleryTabs from './Components/GalleryTabs'
import Before from './Components/Before'
import RastaGallery from './Components/RastaGallery'
import HeroSection from './Components/HeroSection'
import SlidingGallery from './Components/SlidingGallery/SlidingGallery'
import Hero from './Components/Desktop1/Hero'
import Header from './Components/Desktop1/Header'
import ImageSlider from './Components/ImageSlider'


const App = () => {
  return (
    <div>
      <HeroSection />
      <Header />
      <Hero />
      <ImageSlider/>
      <Navbar />
      <Before />
      <GalleryTabs />
      <SlidingGallery />
      <RastaGallery />
      <UserRegistration />
    </div>
  )
}

export default App
