import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer background='#282c34' color='white' />
    </div>
  );
}

export default App;
