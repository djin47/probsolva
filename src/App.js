import React from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/app.scss";
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/services.scss"

function App() {
  return (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/services" element = {<Services />}/>
      </Routes>
      <Footer />
    </Router>
  </>
  )
}
export default App;
