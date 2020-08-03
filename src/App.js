import React from 'react';
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Coaching from './components/Coaching'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Coaching />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
