import React, { useRef } from 'react';
import './App.css';

import Tab from './Components/TabBar/Tab.jsx';
import Present from './Components/Present/Present.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Projects from './Components/Projects/Projects.jsx';
import About from './Components/About/About.jsx';
import Resume from './Components/Resume/Resume.jsx';
import Footer from './Components/Footer/Footer.jsx';

export default function App() {

  const scrollRef = useRef([]);

  const handleScrollView = (val) => {
    const category = {
      0: 0,
      1: 1,
      2: 2,
      3: 3
    };
      scrollRef.current[category[val]].scrollIntoView({ behavior: "smooth" });
    };
    
  return (
      <div className='App'>
        <div className='tab'>
          <Tab onClick={handleScrollView}/>
        </div>
        <div className='main'>
          <Present ref={scrollRef}/>
          <Skills ref={scrollRef}/>
          <Projects ref={scrollRef}/>
          <About ref={scrollRef}/>
          <Resume />
          <Footer />
        </div>
      </div>
  );
}