import React from 'react';
import Countdown from './components/Countdown';
import About from './components/About';
import Committees from './components/Committees';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Begin from './components/Begin';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Begin />
      <Countdown />
      <About />
      <Committees />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
