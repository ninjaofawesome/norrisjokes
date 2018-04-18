import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import '../../index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      Hello world
      <Footer />
    </div>
  );
}

export default App;
