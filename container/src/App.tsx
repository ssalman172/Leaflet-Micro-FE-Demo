import React from 'react';
import './App.css';
import Home from './Pages/Home';
// @ts-ignore
const Header = React.lazy(() => import("HeaderFooter/Header"));
// @ts-ignore
const Footer = React.lazy(() => import("HeaderFooter/Footer"));

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer background="#282c34" color="#eeeded" />
    </div>
  );
}

export default App;
