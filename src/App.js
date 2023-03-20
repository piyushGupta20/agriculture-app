import React from 'react'
import Home from './screens/Home';
// import { Link } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home/>
    </div>
  );
}

export default App;