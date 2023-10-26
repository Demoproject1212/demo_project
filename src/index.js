import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar/>
    <App/>
    <Footer/>
  </div>
    
);

