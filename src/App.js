import './App.css';
import React from 'react';

import Enquire from './pages/enquire.jsx';
import Everyday_skincare from './pages/everyday_skincare';
import Hero from './pages/hero';
import Natural from './pages/natural';
import Our_therapist from './pages/our_therapist';
import Reflexology_massage from './pages/reflexology_massage';
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
