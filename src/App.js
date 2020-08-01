import React from 'react';
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Coaching from './components/Coaching'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Coaching />
      <Testimonials />
    </div>
  );
}

export default App;
