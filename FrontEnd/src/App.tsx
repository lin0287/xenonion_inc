import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from "./Navbar";
import Home from "./Home/Home";
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Gallery from './Gallery';
import Footer from "./Footer";
import Booking from './Booking/Booking';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/contact" Component={Contact} />
        <Route path="/testimonials" Component={Testimonials} />
        <Route path="/blog" Component={Blog} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/booking" Component={Booking} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
