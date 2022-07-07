import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Sidebar />
    </div>
  );
}

export default App;
