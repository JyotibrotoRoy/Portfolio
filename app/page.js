'use client'
import Navbar from "./componenets/Navbar";
import Header from "./componenets/Header";
import About from "./componenets/About";
import Services from "./componenets/Services";
import Work from "./componenets/Work";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    }else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
    <Header isDarkMode={isDarkMode}></Header>
    <About isDarkMode={isDarkMode}></About>
    <Services isDarkMode={isDarkMode}></Services>
    <Work isDarkMode={isDarkMode}></Work>
    <Contact isDarkMode={isDarkMode}></Contact>
    <Footer isDarkMode={isDarkMode}></Footer>
    </>
  );
}
