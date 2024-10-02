import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import Services from './pages/Services.jsx';



function App() {
  return (
    <>
      <Layout/>
    <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
