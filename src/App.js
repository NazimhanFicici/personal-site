import React, { useRef } from 'react';
import './App.css';
import NavbarComponent from './components/navbar';
import { Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import More from './pages/more';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  
  const navbarRef = useRef();
// use force route when mounted
  return (
    <>  
    <NavbarComponent ref={navbarRef} />
    <Routes>
      <Route path="/" element={<Home ref={navbarRef} />} />
      <Route path="/more" element={<More />} />
      <Route path="/home" element={<Home ref={navbarRef}/>} />
    </Routes>
    <Contact />
    <Footer />
    </>
  );
}

export default App;
