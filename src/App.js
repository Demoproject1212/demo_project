import './App.css';
import React from 'react';

import Enquire from './pages/enquire.jsx';
import EverydaySkincare from './pages/EverydaySkincare';
import Hero from './pages/hero';
import Natural from './pages/natural';
import OurTherapist from './pages/OurTherapist';
import ReflexologyMassage from './pages/ReflexologyMassage';
import Skincare from './pages/Skincare';
import Spa from './pages/Spa';


function App() {
  return (
    <div className="App">
      
      {/*Abhijith*/}
      <Hero/>
      <Spa/>
      <ReflexologyMassage/>
      {/*Arun*/}
      <Skincare/>
      <Natural/>
      {/*Abhinav Joy c*/}
      <OurTherapist/>
      <EverydaySkincare/>
      {/*Arun*/}
      <Enquire/>
    </div>
  );
}

export default App;
