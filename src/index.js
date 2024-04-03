import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Feature from './components/Feature';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Banner />
      <Feature/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  </React.StrictMode>
);

