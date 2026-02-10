import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import  Navbar  from './components/Navbar';
import  Hero  from './components/Hero';
import  About  from './components/About';
import  Projects  from './components/Projects';
import  Contact  from './components/Contact';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </React.StrictMode>
);
