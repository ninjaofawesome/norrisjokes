import React from 'react';
import Main from '../Main/Main';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import '../../index.css';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
