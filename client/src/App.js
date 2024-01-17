import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './Components/HomePage/HomePage'
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />}/> 
      </Routes>

    </div>
  );
}

export default App;
