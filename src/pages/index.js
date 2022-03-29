//this is the homepage
import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection';
import { homeObj1, homeObj2 } from '../components/InfoSection/data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  };


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar toggle={toggle}></Navbar>
      <HeroSection/>
      <InfoSection {...homeObj1}/>
      <InfoSection {...homeObj2}/>
      <Services/>
      <Footer/>
    </>
  );
};

export default Home