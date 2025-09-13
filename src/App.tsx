/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import { Routes, Route } from "react-router-dom";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
// import TypescriptConcepts from "./pages/TypescriptConcepts";
// import ReactConcepts from "./pages/ReactConcepts";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/typescript" element={<TypescriptConcepts />} /> */}
          {/* <Route path="/react" element={<ReactConcepts />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;