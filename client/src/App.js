import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage'
import Video from './Pages/Video/Video'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<Video />} />
      </Routes>

    </div>
  );
}

export default App;
