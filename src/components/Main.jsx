import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import Header from './Header';
import Hero from './Hero';
import ReviewSlider from './ReviewSlider';
import DesktopLibrary from './DesktopLibrary'
import EquipmentSelection from './EquipmentSelection';
import Footer from './Footer';
import { Responsive, Segment } from 'semantic-ui-react';

function Main() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewMenu, setViewMenu] = useState(false);
  
  const handleMenuClick = () => {
    viewMenu ? setViewMenu(false) : setViewMenu(true);
  }
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero').getBoundingClientRect();
      if (hero.bottom < 127 && isHeroVisible) {
        setIsHeroVisible(false);
      } else if (hero.bottom > 127) {
        setIsHeroVisible(true);
      }
    }
    if (isLoaded) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded])

  return(
    <>
      <Header
          isHeroVisible={isHeroVisible}
          handleMenuClick={handleMenuClick}
          viewMenu={viewMenu}
      />
      { viewMenu &&
      <Responsive as={Segment} maxWidth={780} >
        <MobileMenu />
      </Responsive>
      } 
      <Hero 
        isHeroVisible={isHeroVisible}
      />
      <ReviewSlider />
      <DesktopLibrary />
      <EquipmentSelection />
      <Footer />
    </>
  )
}

export default Main;