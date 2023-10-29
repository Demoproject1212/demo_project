import './App.css';
import React from 'react';

import Enquire from './pages/enquire.jsx';
import Everyday_skincare from './pages/EverydaySkincare';
import Hero from './pages/hero';
import Natural from './pages/natural';
import Our_therapist from './pages/OurTherapist';
import Reflexology_massage from './pages/ReflexologyMassage';
import Skincare from './pages/Skincare';
import Spa from './pages/Spa';


function App() {
  return (
    <div className="App">
      
      {/*Abhijith*/}
      <Hero/>
      <Spa/>
      <Reflexology_massage/>
      {/*Arun*/}
      <Skincare/>
      <Natural/>
      {/*Abhinav Joy c*/}
      <Our_therapist/>
      <Everyday_skincare/>
      {/*Arun*/}
      <Enquire/>
    </div>
  );
}

export default App;
