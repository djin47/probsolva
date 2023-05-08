import React from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/app.scss";
import "./styles/header.scss"
import "./styles/home.scss"

function App() {
  return (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
      </Routes>
    </Router>
  </>
  )
}
export default App;
