import React from 'react';
import NavbarComponent from '../src/components/NavbarComponent/NavbarComponent';
import BackToTopComponent from './components/BackToTopComponent/BackToTopComponent';
import HomeSection from './components/HomeSection/HomeSection';

function App() {
  return (
    <div className='App'>
      <NavbarComponent />
      <BackToTopComponent />
      <HomeSection />
    </div>
  );
}

export default App;
